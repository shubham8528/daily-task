function runningSum(nums) {
    let runningSumArray = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        runningSumArray.push(sum);
    }

    return runningSumArray;
}

console.log(runningSum([1, 2, 3, 4]))