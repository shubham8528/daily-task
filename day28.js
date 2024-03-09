function countPairsWithSum(nums, K) {
    let frequencyMap = {};
    let count = 0;

    for (let num of nums) {
        let complement = K - num;

        if (frequencyMap[complement]) {
            count += frequencyMap[complement];
        }
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    return count;
}

let nums = [1, 2, 3, 4, 3, 2, 1];
let K = 5;
let result = countPairsWithSum(nums, K);
console.log(result);