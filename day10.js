var strStr = function (haystack, needle) {
    if (needle === "") {
        return 0;
    } else {
        return haystack.indexOf(needle);
    }
};


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))