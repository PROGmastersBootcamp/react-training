# Let's create a simple webshop appliation

## React - Webshop App!

Create the base of our app, using what we've learned so far, name it `webshop-app`

### Start/mock a small web-server

[Readme](./server-data/01-json-server-for-faking-backend.md)

### Axios

For accessing data from the "web", we will use a tool called Axios.  
Talk about the following topics:

- HTTP, API-s, REST
- JS Fetch API
- Promises in JavaScript

Create an implementation for accessing all sorts of data from our server!

## React router

As we are creating an SPA (Single Page Application), routing works a bit differently than before. We are not loading a
complete new HTML page each time we navigate somewhere new, we just render different react components on the same one.
We're going to use the standard routing library for react, called *React Router*.

### Use

To begin with, we need to get the npm to install it for us:

```shell
npm i react-router-dom
``` 

##### App.js:

After installation we need to wrap our project in a *BrowserRouter* component. In our project structure, the most
obvious place for this would be the App.js file. After the usual import statement, simply wrap everything in App.js
between *BrowserRouter* tags, which will look something like this:

```jsx
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import Main from './component/Main';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Main/>
            </div>
        </BrowserRouter>
    );
}

export default App;
```

##### Navbar.jsx:

Now let's turn our *a* tags into React Router Links.

After the import:

```jsx
import {Link} from 'react-router-dom';
```

We simply need to swap the *a* tags with *Link* tags, and provide them with a 'to' attribute instead of the 'href'.

```jsx
<Link to="/" className='navbar-link'>Main Page</Link>
<Link to="second" className='navbar-link'>Second Page</Link>
<Link to="third" className='navbar-link'>Third Page</Link>
```

##### App.js

After this, we will need to specify the components that will be rendered when clicking on the links. We need to import
and use *Route* from 'react-router-dom':

```jsx
import {BrowserRouter, Route} from 'react-router-dom';
```

```jsx
<BrowserRouter>
    <div className="App">
        <Navbar/>
        <Route path='/'>
            <Main/>
        </Route>
        <Route path='/second'>
            <SecondPage/>
        </Route>
        <Route path='/third'>
            <ThirdPage/>
        </Route>
    </div>
</BrowserRouter>
```

The ‘path’ looks for URLs that **start** with the given string. If we now click the 'Second Page' link, the Main Page
will also be rendered, as ‘/second‘ starts with ‘/’. To avoid this behavior, we use the ‘exact’ keyword:

```jsx
<Route path='/' exact>
    <Main/>
</Route>
```

### Switch

By using *Switch*, the router will only look for one matching route and no further. Without it the *Router* would carry
on and render all the components that match the path. Simply import it from 'react-router-dom' and wrap your Routes
inside it:

```jsx
import {Switch} from 'react-router-dom';
```

```jsx
<Switch>
    <Route path='/' exact>
        <Main/>
    </Route>
    <Route path='/second' exact>
        <SecondPage/>
    </Route>
    <Route path='/third' exact>
        <ThirdPage/>
    </Route>
</Switch>
```

##### Navigating programmatically:

To navigate programmatically, use the method *props.history.push('URL')*.

- Debugging, error handling
- Some personal experiences
- Testing basics
- Migrating to TypeScript

#### Accessing URL parameters

Consider the following scenario

```jsx
<Switch>
    <Route path='/' exact component={Main}/>
    <Route path='/products' exact component={ProducListComponent}/>
    <Route path='/product-details/:id' exact component={ProductDetailsComponent}/>
</Switch>
```

We have a Main page, a product list, and a product details page where we would like to get more details of a product,
based on it's ID. Here `:id` symbolizes an arbitrary value, what will become available for us once we navigate to the
component.

Accessing this data

```javascript

export const ProductDetails = (props) => {

    useEffect(() => {
        // Important to note, that this will ALWAYS return a string, so we might need to cast it into a number
        // The match API - https://v5.reactrouter.com/web/api/match
        const productId = Number(props.match.params['id']);
        // This might also be a good place, to redirect the user to another page, if the id is invalid
        // The history API - https://v5.reactrouter.com/web/api/history
        if (isNaN(productId)) {
            props.history.replace('/products');
            // OR props.history.push('/products');
        }
    }, []);

    return <div>Product Details</div>;
};

```

### Debugging

Discuss the following topics

- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- Debugger, breakpoints, watchers, error handling
- [Error boundaries](https://en.reactjs.org/docs/error-boundaries.html)

### Accessing DOM elements via references

#### About useRef() Hook

Accessing DOM elements is core JavaScript in the browser, using vanilla JavaScript a div element with class "title" can
be accessed using:

```jsx
<div class="title">
    This is a title of a div
</div>
<script>
    const titleDiv = document.querySelector("div.title")
</script>
```

The reference to the element can be used to do interesting things such as changing the text
content `titleDiv.textContent = "this is a newer title"` or changing the class
name `titleDiv.classList = "This is the class"` and much more operations.

#### Refs in React through the useRef() HOOK

ReactJS being a modern frontend library took it further by providing a Ref API to access its element, and even a step
further through the useRef hook for a functional component.

```jsx

import React, {useRef, useEffect} from "react";

export default function (props) {
    // Initialized a hook to hold the reference to the title div.
    const titleRef = useRef();

    useEffect(function () {
        setTimeout(() => {
            titleRef.current.textContent = "Updated Text"
        }, 2000); // Update the content of the element after 2seconds 
    }, []);

    return <div className="container">
        {/** The reference to the element happens here **/}
        <div className="title" ref={titleRef}>Original title</div>
    </div>
}
```

### Testing - Briefly

- Jest: https://create-react-app.dev/docs/running-tests/
