---
layout: post
title: "Scopes and Closures"
date: 2017-04-22
tags: ["Javascript", "Technical"]
image_url: "https://placehold.it/230x130"
featured: true
---

## Lexical Scope

There is more than one meaning of the word 'scope' when it comes to programming. One use of the word 'scope', is in 'lexical scope'. This refers to regions in your code where you can access a variable.

When you declare a new variable in a Javascript file, and the variable is not enclosed within a function, the variable is accessible from anywhere in the program, and is said to be in the 'global scope'.

A new 'lexical scope' is created every time you type out a function definition. For example:

{% gist andavies/d734a17946f905b6f3fbed236531e011 %}

Here, the variable 'a' is in the global scope, and can be accessed from anywhere in the program. The variable 'b' is defined inside an enclosing function, and can only be accessed from within that function. Any attempt to access the variable from outside the function will throw an error. The region of code where the variable can be accessed is known as the 'lexical scope' of the variable.

Note that lexical scope in Javascript is constrained between the curly braces of the enclosing *function definition*. It is **not** constrained by the curly braces of what is known as a block: 'if' or 'while' statements or other looping constructs. For example, a variable declared inside an 'if' block will be accessible globally. Some other languages do have what is called 'block scoping'; Javascript has the relatively new 'let' keyword which limits a variable's lexical scope to the enclosing block. Discussion of 'let' is beyond the purposes of this post; for our purposes, know that only the curly braces of *function definitions* create new lexical scopes for enclosed variables declared with 'var'.


## The 'var' keyword

The Javascript keywords 'var' is used, as in the above example, to declare a variable. However, Javascript - unlike other languages - allows you to assign a value to a variable that you have never declared. **Variables that are assigned without the keyword 'var' are added to the global scope**. For example:

{% gist andavies/835e5422521d3d2dbf8257203f69fe8b %}

The only difference between this example and the previous one is that the variable 'b' is assigned without first declaring it. This adds 'b' to the global scope (more accurately, 'b' becomes a property of the *global object*), and therefore this time 'b' is accessible from outside the function.

Using the 'var' keyword in this way (or rather, not using it) is bad practice, because it is more often than not done by accident. Anyone who reads your code could assume that you've simply made a typo, or at least they won't be sure of your intention. It would be more readable to write:

{% gist andavies/f642afc212161cd98f58c83c02a190c9 %}


## Why use scopes?

Constraining scopes in this way allows us to understand our programs more easily, and prevents us from making mistakes. By *encapsulating* variables within functions, we are making them easier to understand because we can concentrate on just that part of the program without worrying about what other parts of the program are doing to those variables. 

We also prevent other areas of the program from messing with variables my mistake. For example, a common name for a variable might be 'sum'. If 'sum' was in the global scope we'd only be able to have one 'sum'. Any attempts to re-use sum would overwrite its existing value. But by using scopes we can have many 'sum' variables, each *encapsulated* from the rest. 

Large programs have a large number of variables. If all variables were in the global scope we would quickly run out of meaningful variable names, and we might forget that we've already used a name elsewhere. The practice of adding too many variables to the global scope in this way is known as *polluting the global scope*.


## Execution context

To follow...



