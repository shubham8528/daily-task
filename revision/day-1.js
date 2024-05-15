// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const palindorme = (item) => {
  const string = item
    .toLowerCase()
    .split("")
    .join("")
    .replace(/[^A-Z0-9]/gi, "");
  let reverceStr = [];
  let count = string.length;
  while (count >= 0) {
    reverceStr.push(string[count]);
    count--;
  }
  return reverceStr.join("") == string;
};
console.log(palindorme("A man, a plan, a canal:,]Panama"));
