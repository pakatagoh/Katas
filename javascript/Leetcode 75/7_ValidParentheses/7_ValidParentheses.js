const charMap = {
  '(': ')',
  '{': '}',
  '[': ']',
};

var isValid = function (s) {
  if (s.length === 1) {
    return false;
  }
  if (s.length === 2) {
    return charMap[s[0]] === s[1];
  }

  const temp = [charMap[s[0]]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === temp[temp.length - 1]) {
      temp.pop();
      continue;
    }
    if (charMap[s[i]]) {
      temp.push(charMap[s[i]]);
      continue;
    }

    return false;
  }

  return temp.length === 0;
};

var isValidImproved = function (s) {
  if (s.length === 1) {
    return false;
  }
  if (s.length === 2) {
    return charMap[s[0]] === s[1];
  }

  const temp = [charMap[s[0]]];

  for (let i = 1; i < s.length; i++) {
    if (charMap[s[i]]) {
      temp.push(charMap[s[i]]);
      continue;
    }
    if (s[i] !== temp.pop()) {
      return false;
    }
  }

  return temp.length === 0;
};

var isValidAnother = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
