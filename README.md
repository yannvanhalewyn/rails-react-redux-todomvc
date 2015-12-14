Todo MVC with React, Redux and Rails
===

This is my implementation of the [TodoMVC](http://www.todomvc.com) app. Ive expanded it with a Rails JSON API as backend for persistence. On the frontend I used [React](http://facebook.github.io/react/) and [Redux](http://redux.js.org/). The Redux store data and state flowing through the app is mostly one [Immutable-JS](https://facebook.github.io/immutable-js/) Map. In my humble opinion this makes a very, very powerful combination. The Flux pattern shines when immutable data comes into play.

I made this because I wanted to learn more about Redux and how it would integrate with a JSON API. I managed to do this quite easily using a couple of vanilla JQuery ajax calls (including optimistic UI updates that fall back in case of errors!). I'm still interested in knowing how this would scale using some Backbone models to sync the Redux store with the backend.

![Imgur](http://i.imgur.com/4yyDMOH.png)

## Running

It's easy as:

`rake db:migrate`

`bundle install`

*`npm install` needed for the javascripts and browserify/babel. If you don't have node installed on
your machine, remove the 'browserify-rails' gem from the Gemfile and find another way to
modularly load the javascripts. The first page load will also take a few seconds sinds browserify will only then compile and bundle all the scripts*

`rails s`

Things you may want to cover:

**Ruby version** *2.2.2p95*

**Rails version** *4.2.5*