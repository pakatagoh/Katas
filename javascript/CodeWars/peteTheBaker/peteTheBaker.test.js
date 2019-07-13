import cakes from './peteTheBaker';

let recipe, available;

describe('How many cakes can Pete Bake?', () => {
  test('this test should return 2', () => {
    recipe = { flour: 500, sugar: 200, eggs: 1 };
    available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    expect(cakes(recipe, available)).toBe(2);
  });

  test('this test should return 0', () => {
    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    available = { sugar: 500, flour: 2000, milk: 2000 };
    expect(cakes(recipe, available)).toBe(0);
  });
});
