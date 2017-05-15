---
title: "Frogger"
image_url: "images/frogger.png"
page_url: "/projects/frogger"
description: "A remake of the classic arcade game"
tags: ["JavaScript", "HTML5 Canvas"]
layout: project
featured: true
date: 1 February 2016
type: "programming"
---

<a href="https://andavies.github.io/frogger/">link to project</a>

The arcade game Frogger was released in 1981, and has since become a videogame classic. It even made an [appearance on Seinfeld](https://www.youtube.com/watch?v=a-FbktgqCqY). This remake of Frogger was a project for [Udacity's Front End Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The game is programmed in Javascript and rendered using HTML5 Canvas. You can see the source code [here](https://github.com/andavies/frogger).

### Warning: technical content!

This project was my first practical introduction to object-oriented programmming. The course - taught by Hack Reactor's Marcus Phillips - introduces the concepts of scopes and closures, the keyword 'this', and prototype delegation.

#### HTML5 canvas

The HTML5 Canvas API allows images to be 'painted' onto a canvas element in a web page. By combining this with a Javascript program, the images can be manipulated in various ways. In this case, the various game sprites are given behaviour according to the program and the player's input. The game engine works by drawing the entire game screen over and over, presenting the illusion of animation. 

#### Object orientation

Object-oriented programming is a way of organising your code so that variables and functions are grouped together in an 'object'. An 'object' is simply a concept or an entity related to whatever your program is intended to do. In the example of Frogger, each sprite (the player character, the 'enemies' and the gems) is an object, and the variables for that object (eg. position, displayed image) are grouped together, as are the functions (called 'methods' in object-oriented laguage) (eg. movement, collision detection).

{% gist andavies/a78b667d96d7f1510ef8ef25aa933935 %}

In the above example, an Enemy object is defined, and the variables for coordinates and speed are grouped within that object.

By using objects, we can also share identical methods between different objects. For example, although different Enemy objects have different position coordinates and different speeds, they all have the same 'render' method (the function that repeatedly draws the object on the canvas) and the same sprite image (an image of a giant ladybird). We can use a property that is built in to all Javascript objects, called 'prototype'.

{% gist andavies/3be4905f500baf0955a14b9791c5a6a7 %}

In the example above, all Enemy objects now have access to the render method and sprite property in Enemy.prototype.

#### How high can you score?

[Try the game for yourself](https://andavies.github.io/frogger/) and see how high you can score. If you enjoyed it, [let me know](https://twitter.com/1andydavies1) on Twitter.

