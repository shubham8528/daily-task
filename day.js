function myFun(arr, m) {
    if (arr.length === 0 || m <= 0) {
        return 0;
    }

    arr.sort((a, b) => a - b);

    let diff = Infinity;

    for (let i = 0; i + m - 1 < arr.length; i++) {
        let mainDif = arr[i + m - 1] - arr[i];
        diff = Math.min(diff, mainDif);
    }

    return minDifference;
}

let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;

let result = myFun(arr, m);
console.log(result);