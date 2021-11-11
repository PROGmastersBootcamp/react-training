# NodeJS

Fun-facts:

- Uses a non-blocking thread - Runs on a single thread. All async job is managed by Node in the background through the
  so-called EventLoop.
- Available since 2009, had a rough start and welcome because of the *funny nature* of JavaScript
    - The ~~funny~~ nature, in details: https://github.com/denysdovhan/wtfjs
- Huge community, tons of available libraries
    - Fun game: https://npmdrinkinggame.party/
    - Fun read: https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/

## Running code, outside the browser

Let's create a script.js file, with the following code:

```javascript
console.log('Hello NodeJS!');
```

Then run it with the next command:

```shell
node script.js
```

## Initializing an empty project

You may use the following command, to initialize a default project:

```shell
npm init
```

The projects heart-and-soul, the `package.json` file. Almost all configuration goes here.

## Let's create a super-simple web-server!

- Create a new directory called `web-server`
- Initialize a new NPM project, called web-server
- Run the following command:
  ```shell
  npm i express
  ```
- Next, lets create a server.js file, with the following code:
  ```javascript
  const express = require('express');
  const app = express();
  app.get('/', (req, resp) => {
      res.send('Hello!');
  });
  app.listen(3000, () => console.log('App running on localhost:3000'));
  ```
- Briefly talk about what the code does
- Last, start it by running this command:
  ```shell
  node server.js
  ```

## Running TS files

Node is unable to run this as-is, first it must be compiled back to native JS code.

- Install the following library **globally** (and talk about what this means):
  ```shell
      npm i -g typescript
  ```
- Check if it worked:
  ```shell
      tsc -v
  ```
- Create a `hello-typescript.ts` file, with the following code
  ```typescript
  const doStuff = (): void => {
      const textToPrint: string = 'Hello Typescript!';
      console.log(textToPrint);
  };
  doStuff();
  ```
- Then compile with the next command:
  ```shell
      tsc hello-typescript.ts
  ```
- This will create the compiled javascript file, which now, could be run by Node:
  ```shell
      node hello-typescript.js
  ```

## Create a Node project with a default TS config

```shell
npm init
npm i typescript
npx tsc --init 
```

Compiling:

  ```shell
  npx tsc index.ts
  ```

- Running this can become quite tedious, but there comes some automation to the rescue! The next command will start a
  process, which will listen to any changes to the .ts files in our folder, and compile them every time!
  ```shell
  npx tsc -w 
  ```

## Bootstrapping the whole process: *Google Typescript Styles!*

- Creates a default project
- Configures Google Standard code rules
- Configures `prettier`
- Configures `ESLint`

  ```shell
      npx gts init
  ```
