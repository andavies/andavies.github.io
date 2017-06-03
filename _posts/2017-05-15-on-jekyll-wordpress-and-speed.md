---
layout: post
title: "Jekyll and Wordpress"
content_meta: "For web developers making a simple website, Wordpress is often unnecessary when faster and simpler alternatives like Jekyll are available."
date: 2017-05-15
tags: ["Jekyll", "Websites"]
small_image_url: "images/jekyll-logo-230x130.png"
large_image_url: "images/tools-640x426.jpg"
featured: true
featured_image_url: "images/jekyll-logo-500x400.png"
latest_post_image_url: "images/jekyll-logo-200x160.png"
---

I don't understand why so many people use Wordpress. 

Every tool has a strength and has its place, and the strength of Wordpress is that it allows people with little or no programming or web development skills to make a decent looking website. In that sense it's a great tool, and it's the reason why most of the world's websites run on Wordpress. 

But the drawbacks are substantial. Wordpress sites tend to be slow and bloated, because it comes with features and therefore code that most people never use. And most Wordpress sites you see don't need such a bloated platform. They might display a few pages of information about a business, have a blog or a few videos, all of which can be done much better without Wordpress slowing it down. 

In the 1980s, supercomputers took up entire rooms. Today, the iPhone in your pocket contains 1.6 billion transistors, and processes 3.36 billion instructions every second. The iPhone 6 is 32,000 times faster than the computers that NASA used to send the Apollo spacecraft to the moon, yet pull up a Wordpress site and it takes 7 seconds to retrieve some text from a server and display it on the screen.

If you're a web developer and you're mainly using Wordpress, you're using the wrong tool. Of course you can dive into the Wordpress code and make any site you like, but why would you? Why use something that is not primarily designed for that purpose? The purpose of Wordpress is to allow non-technical users to make a website. A web developer using Wordpress is like a carpenter using a saw to bang nails in: he can make it work, and the saw is a good quality saw, but there's a more appropriate tool to use.

If you know how to write HTML, CSS and Javascript (not jQuery!), you don't need Wordpress. You can just write the files yourself and send them to the browser. It's lightning fast, you have total control over the site, and there's no additional code flying around that you don't need. However if you have multiple pages, you need some way of avoiding repeating the same code on different pages; for example you don't want to be writing the header or menu for every single page. Also, if you want a blog, you don't want to be writing a new html structure every time you write a new post. This is where Jekyll comes in.

Jekyll is an example of what are called 'static site generators'. A static site is one whose files don't change - the server doesn't piece files together every time the browser requests a page, the files are already there, waiting, and so can be delivered much faster. For instance, this article that you're reading now is from a simple text file. So I can write the article or blog post as simple text, without having to worry about the layout, styles, or html. Jekyll then processes the text file and combines it with the HTML and CSS that I've written elsewhere, and turns it into the page you're seeing now. This all happens as soon as I hit save, not when the user requests the page, so the page is ready and waited and is delivered quickly.

Jekyll doesn't just do this with blog posts, but any 'collection' that you need on your site. In my case I have a 'projects' collection: if I want to add a new project I just write a text file (it's a *markdown* file really) in a simple format, and Jekyll does the rest and adds it to my site. You can even have a contacts form that emails you with a customer's enquiry. You do need to outsource the actual emailing to an external service, but from your customer's point of view that hardly matters.

Like every software tool, Jekyll can't be used for everything. Some sites will need computation on the server, for example if you need users to login to their account this can't be achieved with Jekyll. But for most small businesses, and certainly personal blogs, there aren't many cases where you can't use a static site. If you know what you're doing, and know how to fix things if you type something in the wrong place, Jekyll's file system is its own CMS. But for a non-technical client, it may not be a good idea to let them loose editing markdown files. In fact, a graphical user interface for editing content is the one thing that I think will turn Jekyll into a viable option for small business clients, and I believe that the Jekyll team have plans to make such a thing.

There may be other lighweight static site generators out there that already do this that I'm not aware of. If so, or if you want to defend Wordpress, let me know on [Twitter](https://twitter.com/1andydavies1).