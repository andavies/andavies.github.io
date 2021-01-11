---
title: "My Library | A PHP application by Andy Davies, Software Developer"
date: 12 December 2015
short_title: "My Library"
content_meta: "MyLibrary is a web application that allows you to share your book collection with others in your local community."
image_url: "images/myLibrary.png"
page_url: "/projects/my-library"
description: "Web application that allows you to share your book collection"
tags: ["PHP", "SQL", "HTML", "CSS"]
layout: project
featured: false
index_order: 8
---

This was the first project I ever made, back in 2015. It was the final project from Harvard University's superb programming course, [CS50](https://cs50.harvard.edu/). If you're a programmer at any level I would encourage you to have a look at that course. It's the ideal course for beginners, and certainly if you don't have a degree in computer science it can teach you plenty of fundamental ideas in programming that you may have missed. You can read my [blog post on CS50 here.]({{ site.baseurl }}{% post_url 2017-02-13-I-took-CS50 %})

MyLibrary is a web application that allows you to share your book collection with others. You can search the book collections of other users and borrow them, and lend your books to other users. It's only a prototype - it's never gone live - but the idea eventually is that you join groups; whether they be your workplace, street or book club. It effectively adds everyone's bookshelves together in a giant lending library. If you want to steal the idea, feel free to [fork the project on Github](https://github.com/andavies/myLibrary) (and send me 10% of your profits).

The site is written in PHP and uses an SQL database to store user and book information. The only information the user needs to enter is the book's ISBN number, and the Google Books API does the rest.

You can see the project [here](http://ec2-3-10-204-97.eu-west-2.compute.amazonaws.com:8080/public/). If you like the project, or if you've also taken [CS50](https://cs50.harvard.edu/), [talk to me on Twitter](https://twitter.com/1andydavies1).

(Update Feb 2020: I'm bringing MyLibrary into the 21st Century [here]({{ site.baseurl }}{% link _projects/neverending-project.md %}))