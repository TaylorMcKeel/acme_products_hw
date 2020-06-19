<p align="center">
    <img style="height: 250px;" src='https://pbs.twimg.com/profile_images/2779323089/f1d2488fedff90047a32244dbc624e59_400x400.jpeg'/>
    <h2>Beaver</h2>
</p>

`Beaver` is a *"boiler plate"*. Its a foundation to build apps upon.

It's called **beaver** cause **beaver**s build things. Obviously.

### How to Use

1. As always, `npm i`
2. Work in the `/client` folder to build the web application. Work in the `/server` folder to build the server application. Feel free to write tests in the `/tests`
3. Use the commands from the commands section to do all sorts of cool stuff.
4. To configure the server, you can add a `.env` file to the repo at the root level, and write configuration keys in there.

### Commands

For all of these say `npm run ${command_name_below}`.

- `test`: Run all test files ending with `.spec.js`.
- `test:watch`: Run all test files and monitor for changes.
- `start`: Meant for production. Starts the server in production mode.
- `start:client`: Open your work in the browser, hot reload, have fun. Ideal for development.
- `start:server`: Start running the server in development mode.
- `build`: Build your code for production (e.g. deployment).
- `build:watch`: Build your code and watch it in development mode. Must open the `index.html` file yourself in `/dist`. Useful if `webpack-dev-server` gives you problems.
- `lint`: Tells you all the problems with your codes style.
- `format:client`: Attempts to fix all the problems with your codes style in the `/client` folder.
- `format:tests`: Attempts to fix all the problems with your codes style in the `/tests` folder.
- `format:server`: Attempts to fix all the problems with your codes style in the `/server` folder.
- `format`: Attempts to fix all problems with your codes style across all three aforementioned directories.

### Configuration

You may include a `.env` file in the root directory to modify how `beaver` behaves. Please look for `process.env[NAME]` in the repository to discover what pre-included configs are available. You may obviously extend this (and anything and everything else) if you so desire.
