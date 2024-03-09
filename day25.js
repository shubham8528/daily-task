var pivotIndex = function (nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};

let nums = [2, 1, -1];
let result = pivotIndex(nums);
console.log("Pivot Index:", result);