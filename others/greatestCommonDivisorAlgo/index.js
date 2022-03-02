const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x));

console.log(gcd(6, 2));
console.log(gcd(2, 6));
