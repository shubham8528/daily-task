const myfun = (arr) => {
    return arr.reduce((acc, num) => ({
        min: Math.min(acc.min, num),
        max: Math.max(acc.max, num),
    }), { min: Infinity, max: -Infinity });
}
let arr = [3, 1, 7, 9, 2, 5];
let result = myfun(arr);
console.log(result.min);
console.log(result.max);