---
title: "andydavi.es | A fast portfolio website by Andy Davies, Web Developer"
short_title: "This website"
content_meta: "My website is made using Jekyll, SASS and old-fashioned plain Javascript. It's a static site to showcase my blog and portfolio."
image_url: "images/frog-500x400.jpg"
page_url: "/projects/this-website"
description: "My personal website"
tags: ["Jekyll"]
layout: project
featured: true
feature_order: 3
date: 13 May 2017
index_order: 5
---

This entire website was written by me. There's no off-the-shelf theme, no Bootstrap, and no jQuery. I wanted it to be as lightweight and fast as possible, and I wanted to have complete control. I used the static site generator Jekyll to make the site, and you can read my [blog post on Jekyll]({{ site.baseurl }}{% post_url 2017-05-15-on-jekyll-wordpress-and-speed %}) if you want to know more.

I used Jekyll precisely because I wanted total control of the markup, and I didn't want the overhead of something like Wordpress slowing the site down. I hadn't used Jekyll before; there are other static site generators out there, but I chose Jekyll mainly because it is officially supported by GitHub pages, which means that I can easily push the site to Github and have continuous integration without having to deal with a server configuration. ([You can see the site files themselves on Github](https://github.com/andavies/andavies.github.io).)

Jekyll also supports SASS "out of the box". I find that the most important factor to consider when making a website is organising your CSS. CSS itself has [major problems](https://medium.com/@zamarrowski/css-is-broken-5138773e17a5), so it's really important that you keep it under control. Many times in the past I've started a site writing just one CSS file; it starts off really clear and organised, maybe after a while you start dividing it into sections with comments, but before you know it it's a total mess and you have no idea where your styles are coming from. Also, when you're deep into development and trying to solve a particular problem, it's really tempting to write a quick CSS hack without thinking about the maintainability of it. You will do this at some point, unless you have strong discipline, and SASS helps you write organised, modular, maintainable CSS.

It goes without saying that the site is responsive (the layout dynamically changes on different devices). I still see people claiming 'responsiveness' as some kind of special feature or afterthought, but in 2017 it shouldn't even need to be discussed.

One of the features of my approach to programming generally, is that I don't want any code in there that isn't being used. I like things as lightweight as possible and I like to know exactly how things work. That isn't to say that I re-invent the wheel every time - one of the principles of programming is code re-use and abstraction - but I don't want to import 1000 lines of a library when I only need 10 of them. I therefore hardly ever use jQuery. Perhaps if you have a huge site with loads of Javascript it may make sense to use jQuery, but I certainly don't need it on this site. I have 30 lines of Javascript (un-minified) on this site.

[Let me know](https://twitter.com/1andydavies1) what you think of the site: what you like or what you think can be improved. See how [Google rates the speed of the site](https://developers.google.com/speed/pagespeed/insights/), and compare it to other sites you like. I've published the site as an early version that I intend to keep improving, so it will hopefully get faster and faster as time goes on. 

