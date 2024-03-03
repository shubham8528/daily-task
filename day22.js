function abc(nums) {
    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}
const hasDuplicates = abc([1, 2, 3, 4, 5]);

console.log(hasDuplicates);