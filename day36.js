function findTriplet(arr, X) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];

            if (currentSum === X) {
                return true;
            } else if (currentSum < X) {
                left++;
            } else {
                right--;
            }
        }
    }

    return false
}

let arr = [1, 4, 45, 6, 10, 8];
let X = 13;
console.log(findTriplet(arr, X));