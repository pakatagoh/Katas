import findNb from './buildPileOfCubes';

describe(`Find Number of cubes required if it's an integer`, () => {
  test(`1071225 should return 45`, () => {
    expect(findNb(1071225)).toBe(45);
  });

  test(`4183059834009 should return 2022`, () => {
    expect(findNb(4183059834009)).toBe(2022);
  });

  test(`24723578342962 should return -1`, () => {
    expect(findNb(24723578342962)).toBe(-1);
  });

  test(`135440716410000 should return -1`, () => {
    expect(findNb(135440716410000)).toBe(4824);
  });
  test(`40539911473216 should return 3568`, () => {
    expect(findNb(40539911473216)).toBe(3568);
  });
  test(`36 should return 38`, () => {
    expect(findNb(36)).toBe(3);
  });
});
