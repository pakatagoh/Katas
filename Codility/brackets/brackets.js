const solution = (str) => {
  if (str.length % 2 !== 0) return 0;
  if (str.length === 0) return 1;

  const pairs = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const closingSymbolStack = [];
  for (let i = 0; i < str.length; i++) {
    const closingSymbol = pairs[str[i]];
    if (pairs[str[i]]) {
      closingSymbolStack.push(closingSymbol);
      continue;
    }
    if (closingSymbolStack.length === 0) {
      return 0;
    }
    if (closingSymbolStack.pop() !== str[i]) {
      return 0;
    }
  }
  if (closingSymbolStack.length) return 0;
  return 1;
};

module.exports = { solution };
