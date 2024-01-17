function recurriting(inputString) {
    const charMap = {};
    for (let char of inputString) {
        console.log(char, inputString)
        if (charMap[char]) {
            return char;
        }
        charMap[char] = true;
    }
    return null;
}
const result = recurriting("acbbac");