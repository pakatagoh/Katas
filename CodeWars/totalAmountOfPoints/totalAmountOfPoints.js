const getPoint = (match) => {
  const [homeTeam, awayTeam] = match.split(':');

  const hasWon = homeTeam > awayTeam;
  const hasLost = homeTeam < awayTeam;
  const draw = homeTeam === awayTeam;

  if (hasWon) return 3;
  if (hasLost) return 0;
  if (draw) return 1;
};

const totalAmountOfPoints = (matches) =>
  matches.reduce((accum, currentVal) => {
    return accum + getPoint(currentVal);
  }, 0);

module.exports = { getPoint, totalAmountOfPoints };
