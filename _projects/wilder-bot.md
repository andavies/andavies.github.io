---
title: "Chris Wilder Bot | A mini practical joke"
short_title: "Chris Wilder Bot"
content_meta: "A mini practical joke"
image_url: "images/rsz_chris-wilder.jpg"
page_url: "/projects/wilder-bot"
description: "A 'bot' that texts my friend with the odds on Chris Wilder being sacked"
tags: ["Microservices", "AWS"]
layout: project
featured: true
date: 25 November 2020
index_order: 3
---

Back in January 2020, when we lived in simpler times, I made a bet with a friend that the Sheffield United manager Chris Wilder would be sacked within a year. Long story short, he was doing well at the time, I thought it was a flavour-of-the-month thing, my friend disagreed, and we had a bet for a bit of fun. Fast-forward 10 months and Sheffield United are bottom of the league without a win and the bet is looking good. 

Because I'm childish, I've recently been sending said friend updates on the current odds on Wilder being the next manager sacked - cue LOLs all around. This morning I had another childish idea: what if I wrote a program that automatically sent him the odds every morning and how long the bet had left? 

First, I needed an API that gives me the odds. A bit of Googling led me to the Betfair Exchange API, which is fortunately free. Once I registered for an application key I was able to log into a session:

{% highlight shell %}
curl -k -i -H "Accept: application/json" -H "X-Application: <AppKey>" -X POST -d 'username=<username>&password=<password>' https://identitysso.betfair.com/api/login
  
{
  "token":"SESSION_TOKEN",
  "product":"APP_KEY",
  "status":"SUCCESS",
  "error":""
}
{% endhighlight %}

Then with that token I can call the listMarketBook endpoint, and post the market ID for "next manager to leave post", which I got from the URL on the Betfair website. That gives me a big lump of JSON, which contains somewhere in it the value I want (odds for Wilder). 

So far so good. The next step was getting that in a program so I could manipulate the JSON response to get the value I want. I created an AWS Lambda function in the AWS console, and the following code gets me the same JSON response I got earlier with curl:

{% highlight python %}
def lambda_handler(event, context):
    
    # login
    APIKEY = "MY_API_KEY_HERE"
    betfairPw = json.loads(get_secret())['betfairPw']  # store pw in Secrets Manager
    url = "https://identitysso.betfair.com/api/login"
    headers = { 'X-Application' : APIKEY, 'Accept' : 'application/json' ,'Content-Type' : 'application/x-www-form-urlencoded' }
    body={"username": "andrewdavies84", "password": betfairPw}
    response = requests.post(url, data=body, headers=headers)
    token = json.loads(response.text)["token"]
    
    # get the wilder price
    url = "https://api.betfair.com/exchange/betting/rest/v1.0/listMarketBook/"
    headers = { 'X-Application' : APIKEY, 'Accept' : 'application/json', 'X-Authentication' : token, 'Content-Type' : 'application/json' }
    body = {
    	"marketIds" : ["1.172940650"],
    	"priceProjection": {
            "priceData": ["EX_BEST_OFFERS", "EX_TRADED"],
            "virtualise": "true"
        }
    }
    response = requests.post(url, data=json.dumps(body), headers=headers)
{% endhighlight %}

A bit of rough and ready JSON manipulation and I can get the best price:

{% highlight python %}
    wilderId = 10805743  # got this from the website url
    managers = json.loads(response.text)[0]["runners"]
    wilderData = {}
    for manager in managers:
        if manager["selectionId"] == wilderId:
            wilderData = manager
    bestPrice = wilderData['ex']['availableToBack'][0]['price']
{% endhighlight %}

A quick test run in the console and it's working. Next job is calculating the number of days left until the bet ends:

{% highlight python %}
    from datetime import date

    # days to go until jan 23rd
    a = date.today()
    b = date(2021,1,23)
    days = (b - a).days
{% endhighlight %}

So now I have all the data I need for my hilarious text message: the odds and the number of days left. Next job is sending a text. My first thought was for the Lambda function to publish a message to an SNS Topic, and have my friend's mobile number subscribe to that topic. However my friend would have to confirm the subscription first, which would kind of ruin the joke. It turns out that you can simply publish a message to SNS and supply a PhoneNumber parameter, and you don't even have to have a topic at all:

{% highlight python %}
    sns = boto3.client('sns')
    sns.publish(
        Message='Good Morning Adam. Chris Wilder is currently {} at Betfair Exchange to be the next manager sacked. There are {} days remaining. Have a nice day.'.format(bestPrice, days),    
        PhoneNumber='+44 PHONE NUMBER HERE'
    )
{% endhighlight %}

Simple as that. You just need to add permissions to the Lambda's execution role so that it is allowed to send SMS - I just added an inline policy to get it done quickly:

{% highlight json %}
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sns:Publish"
            ],
            "Resource": "*"
        }
    ]
}
{% endhighlight %}

While we're talking IAM policies, you'll notice I don't hardcode my Betfair password - I've stored it in AWS Secrets Manager and I access it using the boilerplate code that you can find in the AWS docs. You also need to add a policy to the Lambda role to give it read access to that secret.

A quick test using my own phone number and I quickly receive the message:

![Phone Screenshot](/images/phone-screenshot.png "Phone screenshot")

Lovely stuff. The only thing left is to get it to run automatically every morning, which we can do using Amazon EventBridge. Setting up a new rule is simple - you enter the CRON expression that you want ("0 5 * * ? *" in my case - he gets up early), specify the lambda function to execute, and you're all set. Just need to add my friends phone number to the Lambda code next to my own, and it's done.

Time taken: 2 hours
Result: Guaranteed LOLs
Cost: 20 cents for the first million Lambda executions, i.e. 1 million days - should be ok. 40 cents per month for storing the secret, and 4 cents per text message. Total cost for the two months it'll run: $5.80. Worth every penny.

