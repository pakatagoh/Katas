const { solution } = require('./genomicRangeQuery');

describe('Genomic Range Query', () => {
  test('should return [2,4,1] for P=[2,5,0] Q=[4,5,6] and S="CAGCCTA"', () => {
    const P = [2, 5, 0],
      Q = [4, 5, 6],
      S = 'CAGCCTA';
    const expected = [2, 4, 1];
    expect(solution(S, P, Q)).toEqual(expected);
  });
});
