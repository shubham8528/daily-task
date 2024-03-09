function calculateMedian(arr) {
    arr.sort((a, b) => a - b);

    const n = arr.length;
    const middleIndex = Math.floor(n / 2);

    if (n % 2 === 1) {
        return arr[middleIndex];
    } else {
        return Math.floor((arr[middleIndex - 1] + arr[middleIndex]) / 2);
    }
}
let arr = [6, 2, 1, 5, 8, 4];

console.log(calculateMedian(arr));