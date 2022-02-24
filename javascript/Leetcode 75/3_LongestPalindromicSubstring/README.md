Given a string s, return the longest palindromic substring in s.

Example 1:

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

Example 2:

```
Input: s = "cbbd"
Output: "bb"
```

Constraints:

```
- 1 <= s.length <= 1000
- s consist of only digits and English letters.
```

# Solution

### Brute Force

- Get every single permutation and combination
- check each one and see if it is a palindrome and filer them
- check which has the largest length

### Dynamic Programming by using a grid

Contract inwards
uses O(n^2) space and time

- grid of n x n where n is the length of the string
- fill up the diagonal with true
- fill from bottom up the top half of the diagonal

### Expand outwards

Expand outwards
uses O(n^2) time and o(1) space
checks even and odd options

- looping from left to right,
- each loop iteration checks for palindrome starting from i and i and expanding outwards
- also checks for palindrome starting from i and i+1, and expanding outwards

### Fastest, uses the Manachers Algorithm

https://hackernoon.com/manachers-algorithm-explained-longest-palindromic-substring-22cb27a5e96f
