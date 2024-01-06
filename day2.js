// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// ------------------Ans---------------------------------------
var isAnagram = function (s, t) {
    const shortedstr = s.split("").sort().join("")
    const str = t.split("").sort().join("")
    return shortedstr === str

};
let s
let t
s = "anagram"
t = "nagaram"
console.log(isAnagram(s, t))
s = "rat"
t = "car"
console.log(isAnagram(s, t))