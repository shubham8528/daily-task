var myfun = function (nums) {
    return nums.map(num => num * num).sort((a, b) => a - b);
};


// Example usage:
const nums = [-4, -1, 0, 3, 10];
const result = myfun(nums);

