import { encrypt, decrypt } from './alternatingSplit';

describe('This is encryption tests', () => {
  test('This is a test! converted 1 time will return hsi  etTi sats! ', () => {
    expect(encrypt('This is a test!', 1)).toBe('hsi  etTi sats!');
  });

  test('This is a test! converted 2 times will return "s eT ashi tist!" ', () => {
    expect(encrypt('This is a test!', 2)).toBe('s eT ashi tist!');
  });
});

describe('This is decryption tests', () => {
  test('hsi  etTi sats! decrypted 1 time will return This is a test! ', () => {
    expect(decrypt('hsi  etTi sats!', 1)).toBe('This is a test!');
  });

  test('s eT ashi tist! decrypted 1 times will return This is a test! ', () => {
    expect(decrypt('s eT ashi tist!', 2)).toBe('This is a test!');
  });
});
