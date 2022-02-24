function encrypt(text, n) {
  if (n <= 0) {
    return text;
  } else if (text === null) {
    return text;
  } else if (!text) {
    return '';
  }

  let odd = [];
  let even = [];
  let statement;

  for (let i = 0; i < n; i++) {
    let newStatement;
    if (statement) {
      newStatement = statement;
    } else {
      newStatement = text;
    }
    newStatement.split('').forEach((letter, index) => {
      if (index % 2 === 0) {
        even.push(letter);
      } else {
        odd.push(letter);
      }
    });

    statement = odd.join('') + even.join('');
    odd = [];
    even = [];
  }
  return statement;
}

function decrypt(encryptedText, n) {
  if (n <= 0) {
    return encryptedText;
  } else if (encryptedText === null) {
    return encryptedText;
  } else if (!encryptedText) {
    return '';
  }
  const dividingPoint = Math.floor(encryptedText.length / 2);
  let statement;
  let odd = [];
  let even = [];
  for (let i = 0; i < n; i++) {
    let newStatement;

    if (statement) {
      newStatement = statement;
    } else {
      newStatement = encryptedText;
    }
    odd = newStatement.slice(0, dividingPoint).split('');
    even = newStatement.slice(dividingPoint).split('');

    for (let i = 0; i < even.length; i++) {
      if ((statement && i === 0) || !statement) {
        statement = even[i];
      } else {
        statement = statement + even[i];
      }
      if (odd[i]) {
        statement = statement + odd[i];
      }
    }
  }

  return statement;
}

export { encrypt, decrypt };
