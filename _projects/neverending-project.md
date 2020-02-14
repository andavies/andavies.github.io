---
title: "The Neverending Project"
short_title: "The Neverending Project"
content_meta: "A project used to demonstrate software development practises"
image_url: "images/falcor-500x400.jpg"
page_url: "/projects/neverending-project"
description: "An ongoing project used to demonstrate software development techniques"
tags: ["Javascript, AWS"]
layout: project
featured: true
index_order: 1
---


It’s been a few years since I’ve added a new project on here, what with working full-time and having a family. The projects I do have are getting a bit out of date – they were fine five years ago when I made the [career change]({% post_url 2018-03-03-how-to-become-a-software-developer-in-nine-months %}) to software development, but they don’t reflect my ability and knowledge now. 

Rather than make a simple demo project, like the projects I’ve put on here in the past,  I want to make a real piece of software that can survive out in the wild with actual users. It’ll take me a while, as like I said I work full-time and I have a one-year-old at home, but I’ll do it in stages, blogging about the process as I go along. 

The very first thing I ever made was a web application called [MyLibrary]({{ site.baseurl }}{% link _projects/my-library.md %}), nearly five years ago. I’m still quite proud of it, as it’s a full, working application, and it was made without any frameworks, which I think is important when you’re starting out. [You want to learn the principles of programming]({% post_url 2017-02-13-I-took-CS50 %}) rather than just how to use a framework. However, it’s nothing like what I would produce if I were making the same thing today. For a start it’s using PHP.  There’s nothing wrong with PHP, but I haven’t used PHP at all professionally in the last 5 years. The site is also very 90s, which I actually kind of like. Because I was learning from scratch, with no pre-conceived dogma or frameworks, it looks and feels just like a website from the 90s. In this new project, I’ll be re-writing MyLibrary from scratch.

I have a rough plan for the first few things to work on, but after that we’ll just add whatever comes to mind. First, I’ll make a rough prototype, or “proof of concept”, just as I would if I were hired by a company to develop this project. Then I’ll set up continuous integration and deployment, including environments for development, testing and production. After that we’ll add some tests, both unit tests and acceptance tests using the Cucumber framework. At that point we’ll have a good base to start some proper development, and I’ll add more features over time when I get the chance. 

I don’t intend this to be about features of the application itself too much, as this isn’t a project that I intend people to actually use, although who knows it may turn into that. I’ll more be using the project to demonstrate certain aspects of software development: methodologies, tools, frameworks etc. For example, I might re-write the front-end using React or Angular, or maybe find a way to get Redis in there to demo that. We can touch on security aspects such as SQL injection, how to safely store passwords, or implementing 2FA. Or, if something is in the news at some point – GDPR for example – I’ll use the project as a base to discuss it, and perhaps implement something that relates to it. It’s going to be a long, ongoing project.  

A theme running through the project will be running costs and productivity. This is for two reasons: one, as software developers we’re hired by businesses to make them money at the end of the day, not to write endless perfect code; and two, I don’t want to be forking out a lot to keep it running, and I’ll have limited time to spend on it. I’ll be focusing on cloud services – AWS in particular. At some point we’ll look at making the application “serverless”, ideally with a static front-end served by S3, and a microservices architecture using AWS Lambda. 

Before we start though, let’s get the old, original project up and running again so you can see what I’m talking about. Back in 2015 I paid for a shared server running a LAMP stack via Bluehost (it may have even been a WAMP stack), zipped my files up and uploaded it into the console. I can’t remember exactly how much this cost me, but eventually I took it down rather than keep paying every month. A better way is deploying the app to an EC2 (Elastic Compute Cloud) instance in AWS.

I’ll go over the process of setting up an EC2 instance later, when we get into the new project. For 

now, I’ve just created a t2-micro instance with 1GB of RAM, running Amazon Linux, at a cost of about 1p per hour. To make the deployment a bit simpler [I’ve used Docker](https://github.com/andavies/myLibrary/tree/dockerize) to house the application, webserver and database in one container. This way all I need to do is SSH into my instance and use the command `docker-compose up` to get everything running. In reality, you’d want to separate the different services – webserver, database, application – into separate containers, and you’d probably use ECS (Elastic Container Service), but I just want to get this up and running quickly to show what the old project was like. It also no doubt has security issues – this is just a demo app with no real data - I wouldn’t do it like this in production or with real user data.

You can see the old project [here](http://ec2-3-10-204-97.eu-west-2.compute.amazonaws.com:8080/public/), and view the source code [here](https://github.com/andavies/myLibrary). Next up: making a prototype. 


Next: Part 1: Prototype.






