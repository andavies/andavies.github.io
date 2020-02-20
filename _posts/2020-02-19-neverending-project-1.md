---
layout: post
title: "Neverending Project Part 1: Prototype | Andy Davies"
short_title: "Neverending Project Part 1: Prototype"
content_meta: "Making a prototype is the first stage of a new project"
date: 2020-02-19 
tags: ["Javascript", "AWS"]
small_image_url: "images/prototype-230x130.png"
large_image_url: "images/prototype-800x400.png"
featured: false
latest_post_image_url: "images/prototype-500x400.png"
comments: true
---

There are many ways of starting a new software project. One way is to gather detailed requirements from the customer, draw up a series of features, sketch out an architecture and plan a schedule. All this is important, and too often overlooked in the name of Agile (I am a fan of Agile), however before all that I think there’s an even more important thing to do: making a prototype.

Before I go on I should say that you should read [Part 0]({% link _projects/neverending-project.md %}) if you haven't already to explain what this project is about.

People probably have their own definition of a prototype. My definition is this: the simplest possible version of the product that demonstrates how the customer’s problem is solved by the idea. This is different to an MVP or Minimum Viable Product. The prototype will be so simple that won’t necessarily be “viable” to release to actual users. It may have bugs, it may look terrible, it may not be fully functioning. But what it must do is demonstrate the basic idea to the customer. 

The purpose of the prototype is to verify the _idea_: does the proposed solution actually solve the problem. You can’t test that just by imagining the product or talking about it, you have to get hands on. You might find some edge cases that you hadn’t considered, or you might find that the vision you had in your mind doesn’t match the customer’s vision. Often, you might find that you’re solving a different problem to the one the customer actually has. 

A prototype needs to be made as quickly as possible, in order to test the proposed solution. If the idea isn't going to work then everybody needs to know this quickly, or time and money is wasted. This means not wasting time on things like presentation, unless the presentation is a key part of the solution. People will have different opinions on this, but I wouldn’t choose to spend time writing tests either. The prototype should be considered disposable – it may be rejected, in which case you’ve wasted a lot of time polishing code that is now in the bin.

My intention here is to make the simplest possible version of MyLibrary, as quickly as possible. There’s a slight flaw: what is the problem that MyLibrary is solving? Well, in this case it’s just an example project – it doesn’t necessarily solve a real problem. In “real life” that is the first thing that you’d nail down, and you’d reject any solution that doesn’t solve the problem, but for this project we’ll ignore that and just build a simple version that you can use to list your book collection, and view others’ book collections. 

The first decision of the project is which language and framework to use. For a prototype, I wouldn’t choose something like .NET or Java. They may be viable options when building the real thing, but for now I want something lightweight with minimal setup and a fast development loop. Two good options here are Python and Javascript – both interpreted languages that will get you on your feet quickly. I like Python a lot, but for this project we’ll be working across the entire stack and I’d prefer to use one language for the whole thing, which makes Javascript the obvious choice. I can use it for front-end, back-end, AWS Lambda – even scripting. There are many bad things to say about Javascript, but there’s a reason why it’s the [world’s most popular programming language](https://insights.stackoverflow.com/survey/2019#technology). 

For the framework, I’ll be using [Express.js](https://expressjs.com/). The thing I look for in a framework is that it’s lightweight and relatively un-opinionated. I want it to help me with things like routing and templating, mostly I want it to stay out of my way and give me some freedom of expression. Frameworks like Spring Boot are very good at what they do and have big advantages, but I generally prefer there to be as little “magic” going on as possible - I want to be clear in my mind about exactly how my program works. 

Getting started with Express is as simple as creating a project folder, then:

```
npm init
npm install express –save
```

From there all you need is an app.js file (I decided to call it index.js but it doesn’t really matter) with:

{% highlight javascript %}
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))
{% endhighlight %}

That’s it. You’re up and running with a web application on port 3000. From there it’s easy to define your endpoints and serve different pages. I won’t go through all of that but you can see what I’ve done [here](https://github.com/andavies/the-manhattan-project/tree/prototype).

In terms of code quality there’s a balance to strike when making a prototype. On the one hand you want to move quickly, so it doesn’t matter too much if your code is a bit disordered. So maybe you have a file that is all one large block of code rather than being cleanly separated into functions and classes. I think that’s absolutely fine for a prototype, and even in the initial stages of real development. The refactoring can come later.  At this stage it’s a waste of time to be thinking _“does this controller have too much business knowledge?…maybe this class should pass the object to a service layer..etc”_. Just get it working. Remember though that you may well be building on top of this prototype eventually for the actual product, so you don’t want it to be a total mess. In particular, you want to be able to swap pieces of the project out cleanly. So if we decide to change our database, we want the database code to be cleanly separated from the rest of the code so we can swap it out easily. For that reason, and with an eye on separating this out into a microservices architecture in the future, I’ve organised my project files like so:

- api
- auth
- db
- services
- views

By API here I mean the external API that I’m using to get book information; in this case I’m using Google Books. I have a googlebooks.js file that for now only exposes a ‘get’ function. If I ever change to say, the GoodReads API, then all I have to change is this file – the interface that other files use, i.e. the ‘get’ function, won't change.

For authentication I’m using [Passport](http://www.passportjs.org/), but I’m conscious that in the future I may want to switch to AWS Cognito, so I’ve kept all the auth code in one place as much as possible. 

For the choice of database, I haven’t given it too much thought. I’ve used Mongo just so I can throw the book and user data in there in an unstructured way rather than think about the structure at this stage. The way the data is stored is a bit of a mess, but it’ll do for getting the prototype up and running quickly, and I’ll think properly about the data at a later stage as it’s a very important decision to get right. In the ‘db’ folder I have two files: database.js and mongo.js. The database.js file defines an api: getBooks, saveBooks etc, that can be used regardless of what the underlying database implementation is. So if I change the database from Mongo to say, MySQL, all I have to replace is the mongo.js file, and modify database.js. All the code that calls database.js can still use the same API they always have: getBooks, saveBooks etc.

For templating I’ve used [EJS](https://ejs.co/). The choice of templating engine isn’t too important since they all do the same job, but I prefer EJS because it’s simple, and you don’t need to know anything other than html and how to insert some Javascript. Unlike say [pug](https://pugjs.org/api/getting-started.html) which is a whole different thing to get your head around. 

And that’s about it for the prototype. All in all this took me about half a day to make. If this were a real project, having something to show the customer that quickly would be a real benefit.  

As you can see the code is far from perfect. There are no tests, there’s no CSS, some of the code is messy, the way data is stored in the database needs work. In the process of writing this I've noticed that exception handling is all over the place. But, it works, and it’s up and running quickly. All these things will be very important when we start proper development – I’m not saying that these things aren’t important and you should always rush things through – but at this stage they’re not the most important thing.

All that’s left is getting this deployed somewhere, so the customer can actually see and use it. 


## How to launch an EC2 (Elastic Compute Cloud) instance

In the AWS EC2 dashboard, click on 'Launch Instance'. The choice of AMI (Amazon Machine Image) doesn't matter too much as long as it's a Linux image - I've chosen the basic Amazon Linux 2 AMI. For 'instance type' I've chosen a General Purpose t2-micro instance. It has one CPU,  1GB of RAM and low to moderate network performance, which is all we need for now (and probably forever). If you're still in your 12 month free-tier it is also eligible for 750 free hours per month. Click 'configure instance details'. 

In 'number of instances' leave it as 1 - we won't be setting up autoscaling groups at this stage. Select the default VPC, no public IP (we will assign one later), and leave IAM role as 'none' - although IAM roles are the preferred way of handling access to the instance, I won't be doing that just yet. Leave the other options as they are and click 'add storage'. The default 8GB volume will be fine so leave it as that. Click 'add tags'. Tags are optional but it helps you identify instances more easily. Click 'Configure Security Group'.

Security groups control the access to your instance. By default, SSH is open on port 22. We'll need this to upload our project files, but in production you'd want to either close off this port or restrict it to certain IP addresses. We also need to open the port that our application will run on. Click 'add rule', and 'Custom TCP Rule'.  Enter a port number of 3000 (this matches the port we're running Express on), and under 'source' select 'anywhere'. Click 'review and launch', and then 'launch' to 

assign a keypair to the instance. We'll need this keypair to SSH into the instance. Save the generated `.pem` file somewhere you won't forget it. 

Next we'll assign a public IP address to the instance. In the EC2 console select 'Elastic IPs'. An elastic IP is a public IP address that can be created, destroyed and assigned independently of the underlying instance. For example, if the instance is destroyed and a new one created, the same IP address can be used for the new instance. Select 'Amazon's pool of IP addresses' and click 'allocate'. Select the created IP, and under 'actions' click 'associate address'. Choose your instance to associate it to, and select the private IP of that instance.  The instance now has a public IP (it also has a public DNS which  I'll be using to link to). 

Now we need to copy our project files from our local machine to the instance. First, delete the node_modules folder, as there will be a lot in there and we can just download them again faster than we can upload. This isn't an ideal way to deploy an application for real - we'll be setting up continuous deployment at some point, and hopefully provisioning our resources with Cloudformation or Terraform, but this will do for now. Use this command to upload the files:

```
scp -r -i [path-to-pem-file] [main project folder] ec2-user@[ip address]:/home/ec2-user/my-library
```

Then we can SSH into the instance and check that the files are there:

```
 ssh -i <pem> ec2-user@<ip>
```

We then need to get our node modules back with `npm init`, and run the application with `npm start`. Then, if we navigate to our public IP address in the browser, we should see our prototype up and running, ready to use. 

You can check out my prototype [here](http://ec2-35-176-179-41.eu-west-2.compute.amazonaws.com:3000) - let me know what you think in the comments below. The next step will probably be setting up continuous deployment, but that may change. In any case, follow me on [Twitter](https://twitter.com/1andydavies1) and I'll let you know when Part 2 is up. 