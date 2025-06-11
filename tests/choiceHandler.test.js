import { JSDOM } from 'jsdom';
import { renderChoiceButtons } from '../modules/dialogue/choiceHandler.js';

jest.unstable_mockModule('../modules/ui/control/skipButtonController.js', () => ({
  autoUpdateSkipButton: jest.fn(),
}));

beforeEach(() => {
  jest.resetModules();
});

test('renderChoiceButtons creates a button for each choice', async () => {
  const dom = new JSDOM('<div id="container"></div>');
  const { document } = dom.window;
  const container = document.getElementById('container');
  const choices = [
    { text: 'Yes', branch: [] },
    { text: 'No', branch: [] },
  ];
  const context = {};
  renderChoiceButtons(choices, container, context);
  const buttons = container.querySelectorAll('.choice-btn');
  expect(buttons).toHaveLength(2);
  expect(buttons[0].textContent).toBe('Yes');
  expect(buttons[1].textContent).toBe('No');
});
