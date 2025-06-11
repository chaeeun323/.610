# Kakao Branching Dialogue Game

This project is a web-based interactive narrative that emulates a mobile messaging interface. It is built with HTML, CSS and vanilla JavaScript modules. 
## Installation

1. Install [Node.js](https://nodejs.org/) and npm if you have not already.
2. Clone this repository and install the dependencies:
   ```bash
   npm install
   ```

## Running the Game

Open `index.html` directly in a modern browser or serve the project with a lightweight static server such as `serve` or `http-server`.

## Running Tests

This project includes a small Node-based test suite. Run it with:

```bash
npm test
```

## Troubleshooting npm Installation Issues

If `npm install` fails because the registry is unreachable, you can specify the public npm registry:

```bash
npm config set registry https://registry.npmjs.org/
```

Make sure your network allows access to this registry and try again.

## Intro Bubble Animation Issues

If the intro bubble motion does not play, confirm that `style.css` is loaded correctly and that no JavaScript errors appear in the browser console.
