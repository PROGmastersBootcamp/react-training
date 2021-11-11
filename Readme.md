# 00 - Intro

## Elméleti alapok

### Kis történelem

Java - 1995 - Beta, 1996 - 1.0  
JavaScript - 1996 -> 1997 ECMAScript  
TypeScript - 2012 - Microsoft  
jQuery - 2006  
React - 2013 - Facebook  
Angular - 2016

### [JavaScript](00-Intro/00-01-JavaScript.md)

### [ES6 new features](00-Intro/00-02-EcmaScript.md)

- let, const
- arrow functions
- classes, inheritance
- export/import
- spread operator
- destructuring

### [TypeScript](00-Intro/00-03-TypeScript.md)

TypeScript is a superset of JavaScript which means it contains all features of it and may add extra functionality and/or
enhancements to it (inheritance, anyone?). Its greatest advantage is that it adds optional static typing to the
language. TypeScript gets compiled into JavaScript, so the browsers don't need to be prepared for another language.

## React Intro

### What IS ReactJs?

React.js is a JavaScript library (not a Framework!), developed by Facebook.

- It's main purpose is to solve issues, such as:
    - Updating our DOM dynamically
    - Managing a sort of state through-out our website
    - Give a desktop-application look-n-feel to our website, as
      an [SPA](https://en.wikipedia.org/wiki/Single-page_application)
- https://reactjs.org/
    - Checking out its documentation and tutorials is highly recommended!
    - Available in other languages as well, but better stick to English :)

# 01 - React - Basics

### Hands-on: Using the library

- Importing the .js scripts
- A React.createElement() method and JSX
- Rendering, JSX basics: attributes, style, statements
- Managing state
- Interpolating data into JSX
- Event Handling

Go through the HTML files in `./01-React/01-react-intro`

- Get familiar with the basics of React syntax
- Learn how our code and logic gets abstracted away step-by-step

### Exercise

- Solve the exercise in **01-React/02-exercise-stopwatch/stopwatch.html** file
- Solve the exercise in **01-React/03-exercise-welcome-page/welcome-page.html** file

## [NodeJs intro](./02-CRA/02-01-NodeJs.md)

Basics, talk about:

- What is Node? Why do we need it?
- EcoSystem
- Basic usage

# 02 - CRA

## Creating a React project: the create-react-app command

## [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html)

- Usage
- Additional configuration
- Default structure and configuration
- NPM commands - Starting and building our application

# 03 - React - Part 2

- Recap - TODO App!
    - Creating the base of our app, using what we've learned so far
- [Extending our TODO App!](./03-React-2/03-01-TODO-App.md)
    - Rendering lists
    - Conditional rendering
    - More on styling our components
        - [9 Ways to implement styles](https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3)
    - More on Props - Introducing PropTypes
    - Controlled and Uncontrolled components
    - Stateless components

# 04 - Blackjack!

How to continue the development of an existing project? Since you already have your package.json file, you already
possess the information what dependencies you need. Now all you must do, is install them.  
Just run the following command in the projects directory (next to package.json!)

```shell
npm install
```

Work in `04-Blackjack` folder, to create a Blackjack application!
[Instructions](./04-Blackjack/INSTRUCTIONS.md)

# 05 - React - Part 3

- React - Webshop App!
    - Creating the base of our app, using what we've learned so far
- [Extending our Webshop App!](./05-React-3/05-01-Webshop-App.md)
    - Start/mock a small web-server: [Readme](./05-React-3/server-data/README.md)
    - Axios - HTTP, Promises
    - Routing
    - Debugging, error handling
    - Some personal experiences
- Testing basics
- Migrating to TypeScript

# 06 - Budget Tracker - Exercise


### What's next?

- React Context
- TypeScript
    - [Migrate existing project to TypeScript](https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/)
    - Advanced TypeScript features
- [Redux](https://react-redux.js.org/)
- [Storybook](https://storybook.js.org/)
- [React-RxJS](https://react-rxjs.org/)
- Server Side Rendering - [Next.js](https://nextjs.org/)
- [React Native](https://reactnative.dev/)
- [Dive into the build process and Webpack](https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/)
    - [Official docs](https://webpack.js.org/)
- Component libraries
    - [React-Bootstrap](https://react-bootstrap.github.io/)
    - [Material UI](https://mui.com/)
    - [Semantic UI](https://react.semantic-ui.com/)
- [In-Depth-Dev](https://indepth.dev/)
- [Awesome-React](https://github.com/enaqx/awesome-react)
