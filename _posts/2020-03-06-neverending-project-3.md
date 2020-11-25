---
layout: post
title: "Neverending Project Part 3: Infrastructure as Code | Andy Davies"
short_title: "Neverending Project Part 3: Infrastructure as Code"
content_meta: "Deploying a development stack using CloudFormation"
date: 2020-03-06 
tags: ["DevOps", "AWS"]
small_image_url: "images/cf-230x130.svg"
large_image_url: "images/cf.svg"
featured: false
latest_post_image_url: "images/cf-500x400.svg"
comments: true
---

A big part of DevOps is “Infrastructure As Code”. In this post I’ll be using AWS Cloudformation to create and provision our infrastructure with the press of a button.

In the [previous post]({% post_url 2020-03-05-neverending-project-2 %}) we set up Continuous Deployment, so that any changes to our code repository were automatically deployed to our dev environment. But we were still creating the resources – EC2 instances, VPCs, etc. – manually using the console. That is fine as a one-off, but there are many benefits to storing the infrastructure configuration in the codebase.

First, it makes sense to store all the configuration for an environment in one place. It’s self-documenting, and it makes your infrastructure reproducible. For example, at present we don’t have a prod environment set up, but once I have a CloudFormation template that specifies the infrastructure, I can spin up or tear down prod with a single command. Infrastructure as code also means that we can version control the infrastructure alongside our codebase – if we need to roll back to a previous version we can do so easily. 
You can see the CloudFormation template that defines my infrastructure [here](https://github.com/andavies/the-manhattan-project/blob/master/dev.cloudformation.template).

I can then create the entire stack with: 

{% highlight shell %}
 aws cloudformation create-stack --template-body dev.cloudformation.template
{% endhighlight %}

The next step will be adding unit tests and acceptance tests, which can be added to our deployment pipeline and (eventually) allow us to deploy to production.
