---
title: "n-puzzle | An artifical intelligence program in Python by Andy Davies"
date: 2 June 2016
short_title: "n-puzzle"
content_meta: "A program written in Python that solves any given n-puzzle."
image_url: "images/westworld.png"
page_url: "/projects/n-puzzle"
description: "A program that solves any n-puzzle"
tags: ["Python", "AI"]
layout: project
featured: false
index_order: 7
---


This project is my first venture into the world of Artificial Intelligence. It is a program that solves any given [n-puzzle](http://mypuzzle.org/sliding). At some point I plan to make an interactive version for this site using HTML5 Canvas, but at the moment it's a command line program that you can clone from [GitHub](https://github.com/andavies/n-puzzle). This project is also the first thing I've made using Python.

The real goal of the project was to learn the fundamentals of AI, in particular to explore the efficiency of search algorithms in terms of time and space complexity. My companion for this project was the canonical text for AI: *Artificial Intelligence: A Modern Approach*, by Stuart Russell and Peter Norvig.

Given any n-puzzle, there are at most four possibilities for the first move: sliding a tile up, down, left, or right. (If the empty 'tile' is at the edge of the grid not all options are possible.) The program navigates different paths through the 'search space' of possible moves until it reaches a point where the puzzle is complete (the grid is ordered). Once it reaches the goal state, it returns the path it took to reach it.

The program gives three options for the search method:

* Breadth-first search
* Depth-first search
* A-star search

Breadth-first and depth-first searches are in a sense 'blind', in that they don't know how close they are to the goal. They only 'know' what the goal state is, and they blindly search all possible paths until they find it. 

A* search uses a heuristic to determine how close it is to the goal at any given state. This allows it to select the next move based on how close the resulting state is to the goal state. This saves time and space compared to 'uninformed search algorithms' such as breadth-first and depth-first, which treat all possible 'next states' to be equal.

The heuristic I've used for A* search is the Manhattan Distance Heuristic, which calculates the distance that each tile is from its goal position. The name of the heuristic alludes to the shortest path that a [taxicab could take in a city like Manhattan](https://en.wikipedia.org/wiki/Taxicab_geometry), where the roads form a grid pattern.

[Try the program for yourself](https://github.com/andavies/n-puzzle) and see if you're [smarter than the machine](https://www.youtube.com/watch?v=EtMdMmrfipY)! 