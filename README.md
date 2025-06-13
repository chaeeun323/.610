# Kakao Branching Dialogue Game

This project is a web-based interactive narrative that emulates a mobile messaging interface. It is built with HTML, CSS and vanilla JavaScript modules. 
## Installation

1. Install [Node.js](https://nodejs.org/) and npm if you have not already.
2. Clone this repository. There are no external packages, but running `npm install` will create a lock file for consistency:
   ```bash
   npm install
   ```

## Running the Game

Open `index.html` directly in a modern browser or run the built-in server:

```bash
npm start
```

This script uses Node's `http` module to serve the project locally without any external dependencies.

## Attendance Rewards

Daily attendance grants in-game "복" points. Progress and your current 복 count are stored in `localStorage` and included when saving and loading game data.

Starting a new game now clears these stored values so attendance rewards and bok points reset.

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
