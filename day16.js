var myfun = function (nums) {
    nums.splice(0, nums?.length, ...new Set(nums));
    return nums?.length;
}
console.log(myfun([1, 1, 2]))