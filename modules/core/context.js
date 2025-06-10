// Core context aggregates DOM references, game state, and shared methods
// to provide a centralized object used throughout the application.
import domRefs from './domRefs.js';
import state from './state.js';
import buildMethods from './contextMethods.js';

const context = {
  ...domRefs,
  ...state,
};

Object.assign(context, buildMethods(context));

export default context;
