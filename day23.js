var merge = function (nums1, m, nums2, n) {
    let i = m - 1; // Index for nums1
    let j = n - 1; // Index for nums2
    let k = m + n - 1; // Index for the merged array

    while (i >= 0 && j >= 0) {
        // Compare elements from nums1 and nums2 and place the larger one at the end of the merged array
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);