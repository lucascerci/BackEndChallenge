const narcisistNumber = require('./narcisist');

test('153 should be a narcisist number', () => {
  expect(narcisistNumber('153')).toBe(true);
});

test('1634 should be a narcisist number', () => {
    expect(narcisistNumber('1634')).toBe(true);
});

test('1635 should not be a narcisist number', () => {
    expect(narcisistNumber('1635')).toBe(false);
});