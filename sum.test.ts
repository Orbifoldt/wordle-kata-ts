import sum from "./sum";

// Example of a test
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Example of a failing test
// test('adds 1 + 2 to equal 4', () => {
//   expect(sum(1, 2)).toBe(4);
// });