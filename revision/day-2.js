const checkString = (s, t) => {
  const a = s.split("").sort().join("");
  const b = t.split("").sort().join("");
  return a == b;
};
const s = "anagram";
const t = "nagaram";
console.log(checkString(s, t));
