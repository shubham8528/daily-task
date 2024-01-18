function recurriting(s) {
    let result = 1;
    let t = 1;

    for (let i = 1; i < s.length; i++) {
        const a = s[i - 1];
        const b = s[i];

        if (a === b) {
            t += 1;
            result = Math.max(result, t);
        } else {
            t = 1;
        }
    }

    return result;
}

const result = recurriting("abbcccddddeeeeedcba");
console.log(result);