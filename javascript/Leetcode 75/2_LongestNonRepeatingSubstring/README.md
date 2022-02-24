Given a string s, find the length of the longest substring without repeating characters.

Example 1:

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
```

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

`0 <= s.length <= 5 \* 10^4`
s consists of English letters, digits, symbols and spaces.

# Solution

### Naive

O(N^3) solution
loop through the list with 2 for loops to create every permutation and combination of all strings

for each created string, filter all string with duplicates by looping through and checking if there characters repeated before in a hash tabel

find the max length of all filtered unique strings

### Optimal

- Sliding window method
- You have 2 pointers. both starting at 0 index
- Keep moving the right pointer. As you go along, construct a new sub string.
- If that substring is greater than the previous substring, assign a new max value.
- If come into contact with another repeating character, move the left pointer to 1 ahead of that first instance of repeating character

keep moving right pointer until it reaches the end
