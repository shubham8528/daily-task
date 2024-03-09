function myfun(arr, x) {
    let n = arr.length;
    let minLength = Infinity;
    let start = 0, end = 0;
    let currentSum = 0;

    while (end < n) {
        while (currentSum <= x && end < n) {
            currentSum += arr[end];
            end++;
        }

        while (currentSum > x && start < n) {
            minLength = Math.min(minLength, end - start);
            currentSum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
console.log(myfun([1, 4, 45, 6, 0, 19], 51));