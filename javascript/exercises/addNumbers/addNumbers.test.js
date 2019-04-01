const addNumbers = require('./addNumbers');

describe('addNumbers', () => {
  it('addNumbers should return 5 when 2 and 3 are given', () => {
    expect(addNumbers(2, 3)).toEqual(5);
  });
});
