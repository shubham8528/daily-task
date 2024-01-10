var addStrings = function (num1, num2) {
    let lengthA = num1.length
    let lengthB = num2.length
    let res = ""
    let carry = 0
    let tmp;
    while (lengthA > 0 || lengthB > 0 || carry) {
        tmp = (lengthA-- > 0 ? +num1[lengthA] : 0) + (lengthB-- > 0 ? +num2[lengthB] : 0) + carry;
        carry = tmp / 10 | 0;
        res = tmp % 10 + res;
    }
    return res;
};

console.log(addStrings("12", "123"))