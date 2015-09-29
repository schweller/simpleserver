## React server-side rendering

Requirements:
- **node.js**
- **babel** and **webpack** package installed globally `npm install -g babel webpack`

Step-by-step:
- Run `npm install` to install the local dependencies
- Run `npm run build-component` to build the tlp_header Component
- Run `npm run build-style` to webpack the tlp_header Style
- Then, run `node server.js` to startup the server

Optional:
- Run `npm run watch` to watch for `./src/server.js` file changes and recompile with `babel`
