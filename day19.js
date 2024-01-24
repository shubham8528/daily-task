function findDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
    return -1;
}

const nums = [3, 1, 3, 4, 2];
const duplicate = findDuplicate(nums);

if (duplicate == -1) {
    console.log("No duplicate");
} else {
    console.log(`duplicate  ${duplicate}`);
}