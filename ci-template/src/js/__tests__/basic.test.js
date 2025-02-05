// import sum from '../basic';

// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });
import characterStatus from '../app';

test('healthy', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };

  expect(characterStatus(character)).toBe('healthy');
});

test('wounded', () => {
  const character = {
    name: 'Маг',
    health: 30,
  };

  expect(characterStatus(character)).toBe('wounded');
});

test('critical', () => {
  const character = {
    name: 'Маг',
    health: 1,
  };

  expect(characterStatus(character)).toBe('critical');
});
