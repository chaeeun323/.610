# Project Setup

This project uses [Jest](https://jestjs.io/) for testing. The configuration is defined in `jest.config.js` and uses the `jsdom` test environment.

## Running Tests

Install dependencies and run the test suite:

```bash
npm install
npm test
```

The test script runs Jest through Node's experimental VM modules:

```bash
node --experimental-vm-modules node_modules/.bin/jest
```


