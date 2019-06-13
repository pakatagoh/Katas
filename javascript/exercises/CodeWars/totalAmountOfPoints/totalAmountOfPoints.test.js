const { getPoint, totalAmountOfPoints } = require('./totalAmountOfPoints');

describe('Total amount of points', () => {
  describe('For one match', () => {
    it('returns 3 points if our team wins for one match', () => {
      expect(getPoint('3:2')).toBe(3);
    });

    it('returns 0 points if our team loses one match', () => {
      expect(getPoint('2:3')).toBe(0);
    });

    it('returns 1 points if there is a draw for one match', () => {
      expect(getPoint('2:2')).toBe(1);
    });
  });

  describe('For a list of matches', () => {
    it('should return 6 points if our team wins 2 matches', () => {
      expect(totalAmountOfPoints(['3:2', '2:1'])).toBe(6);
    });

    it('should return 6 points if our team wins 2 matches', () => {
      expect(totalAmountOfPoints(['3:2', '2:1'])).toBe(6);
    });

    it('should return 0 points if our team wins 0 out of 2 matches', () => {
      expect(totalAmountOfPoints(['0:2', '0:1'])).toBe(0);
    });

    it('should return 2 points if our draws 2 out of 2 matches', () => {
      expect(totalAmountOfPoints(['2:2', '2:2'])).toBe(2);
    });
  });
});
