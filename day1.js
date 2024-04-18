
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


// --------------------------------------------------Ans----------------------------------------------------

var isPalindrome = function (s) {
    //   --------convert pure string----------
    const string = s.split("").join("").replace(/[^A-Z0-9]/ig, "").toLowerCase()
    const reverce = []
    for (let j = string.length; j >= 0; j--) {
        if (string[j] !== undefined) {
            reverce.push(string[j])
        }
    }
    return reverce.join("") == string
};



console.log(isPalindrome("abcddcba")) //true
console.log(isPalindrome("A man, a plan, a canal: Panama")) //true



