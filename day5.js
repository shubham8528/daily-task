const prefixString = (s) => {
    if (s.length === 0) return "";
    for (let i = 0; i < s[0].length; i++) {
        for (let j = 1; j < s.length; j++) {
            if (s[j].length <= i || s[j][i] !== s[0][i]) return s[j].substring(0, i);
        }
    }
    return s[0];

}

console.log(prefixString(["flower", "flow", "flight"]))