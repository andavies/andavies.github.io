---
title: "Implementing login | A simple implementation of user login and registration"
short_title: "Simple login"
content_meta: "A mini-project that demonstates how to implement a simple login and registration feature"
image_url: "images/handmade.png"
page_url: "/projects/simple-login"
description: "A simple implementation of user login and registration"
tags: ["Python"]
layout: project
featured: true
index_order: 1
---


Reducing complexity is the main job of a programmer. As programs grow, they will naturally tend towards more complexity, and a good programmer will be constantly fighting to reduce it. Sometimes, one way to reduce complexity is to use a large framework - Spring for example. In a large team, or on a complicated project, a framework like Spring may help to standardise things and reduce the complexity, rather than 20 different programmers doing things in different ways. 

Too often though we reach for tools or frameworks out of dogma, without considering whether it’s the best tool for the job, and in my opinion large frameworks are vastly overused. A lot of the software we write could actually be very simple, if we just _wrote it ourselves_, without relying on a large framework to abstract things away, or importing massive libraries for very simple tasks. 

What you end up with is bloated, slow software. [We’ve become accustomed to waiting 4 seconds for a webpage to respond]({{ site.baseurl }}{% post_url 2017-05-15-on-jekyll-wordpress-and-speed %}) when we click on something. We’ve become used to seeing stack traces that are 20-deep when we get an error in our code. Worst of all, we understand very little of how the hundreds of thousands of lines of code in our application actually work.

Whenever I question the automatic use of a large framework, one of the points that is always raised in its defence is that it handles user login and registration “out of the box”. So, how hard is it to write your own login and registration system?

This project is a basic web application that simply handles registration, login, and user sessions. You can see the project here - you can run it in a Docker container with the command `docker-compose up`. No doubt this is just the _basics_ of a login/registration feature - you would want to build more on top of this. The point is that it’s simple, it’s fast to write and it’s easy to understand. By writing it yourself it makes you understand fundamental issues that many programmers get away with not having to understand - things like how to prevent SQL injection and how to securely hash a password.

I _am_ using a framework for this. I thought about writing my own web application without a framework, but that’s probably a different project. I don’t want to be implementing my own URL routing or interacting directly with a web server. ]Flask describes itself as a ‘microframework’](https://flask.palletsprojects.com/en/1.1.x/foreword/#what-does-micro-mean) - it gives you a simple core and leaves everything else up to you. There are ‘extensions’ for things like login and registration that you can use if you want to, but I won’t be using these. Using just the core of Flask, you have to implement almost everything yourself, in whichever way you like. Flask gives you a freedom of expression that some other frameworks don’t.

A basic principle of security is that input should be filtered and output should be escaped. In this case, the registration data from the user is filtered - for example we make sure that the username is of a certain length and is alphanumeric:

```python
if request.method == 'POST':

    if request.form['username'].isalnum() and len(request.form['username']) < 50: # arbitrary len necessary?
        filtered_username = request.form['username']
    else:
        return "Invalid username. Must be alphanumeric characters only and less than 50 characters"

```

Then we hash the password using a strong, industry-standard algorithm, in this case [Argon2](https://security.stackexchange.com/questions/193351/in-2018-what-is-the-recommended-hash-to-store-passwords-bcrypt-scrypt-argon2). 

```python
    # 'rounds' wants to be as high as poss - but tradeoff with performance
	hashed_password = argon2.using(rounds=4).hash(request.form['password'])
```

Note that cryptography is one of the things that you should _not_ try to implement yourself - it’s simply beyond the remit and expertise of a software developer. Leave this to the mathematicians and the security experts - the risk is just too high here with little benefit.

Then we escape the data we send to the database (output) to prevent SQL injection:

```python
    with sqlite3.connect('db/database.db') as connection:
        cursor = connection.cursor()
        # sqlite3 will prevent sql injection as long as you use it like this (i.e. not using python's standard string placeholders)
        cursor.execute("SELECT * from users WHERE username = ?", (request.form['username'],))
        rows = cursor.fetchall()
        if len(rows) != 0:
            return "username already exists"
        else:
            cursor.execute("INSERT INTO users (username, hash) VALUES(?, ?)", (filtered_username, hashed_password))
            connection.commit()		
            return redirect(url_for('login'), code = 307) # using 307 calls /login with POST
```

At no point is the user’s plain text password stored in our application. If the database is ever compromised by an attacker - you need to assume it will be - then all they will have are hashed passwords that are extremely difficult if not impossible to crack (especially if you also enforce strong passwords on your users, which we won’t cover here). For the same reason, you should avoid collecting sensitive information if you can at all avoid it - do you really need to store credit card details? This applies even more so in the age of GDPR.

When a user logs in, we hash the password they give us and compare that to the hash we have stored against their username:

```python
    with sqlite3.connect('db/database.db') as connection:
        connection.row_factory = sqlite3.Row # https://docs.python.org/3/library/sqlite3.html#accessing-columns-by-name-instead-of-by-index
        cursor = connection.cursor()
        cursor.execute("SELECT * from users WHERE username = ?", (request.form['username'],))
        rows = cursor.fetchall()
        if len(rows) == 0:
            return "user not found"
        assert len(rows) == 1
        stored_password = rows[0]['hash']
        entered_password = request.form['password']
        if argon2.verify(entered_password, stored_password):
            session['username'] = request.form['username']
            return redirect(url_for('index'))
        else:
            return "Invalid credentials"
```

For the database I’m using SQLite, which is essentially just a file that sits alongside your application code. One of the principles I try to stick to is using the simplest possible solution, and then only ‘upgrading’ later on when there’s a clear requirement for it that is solved by the new technology. 

One thing I like about this mini-project is it’s fast: fast to run and fast to write. Web pages should not take five seconds to log you in - we’ve just got used to this being the case. There is no reason why it shouldn’t be nearly instant. It’s also simple - simple to write and simple to understand. The only knowledge you need is the fundamentals of programming - you don’t need to learn how to use a complicated new framework.

It’s also more enjoyable to write code in this way.  Too often our jobs comprise just plumbing over-complicated systems to each other and not understanding how they work. Being able to express yourself in code however you like and _actually programming_ has a big impact on job satisfaction, productivity, and the quality of the software we produce.

For more reading on keeping software simple see [handmade network](https://handmade.network/manifesto).
