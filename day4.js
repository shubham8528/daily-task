var reverseString = function (s) {
    let reverse_array = s.map((item, idx) => s[s.length - 1 - idx])
    return reverse_array
};

console.log(reverseString(["h", "e", "l", "l", "o"]))
console.log(reverseString(["H", "a", "n", "n", "a", "h"]))