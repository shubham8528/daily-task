function findMajorityElement(nums) {
    let candidate, count = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        return null;
    }
}
const array = [2, 2, 1, 1, 1, 2, 2]
console.log(findMajorityElement(array));