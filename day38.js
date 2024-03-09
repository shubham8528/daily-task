function myfun(arr1, arr2) {
    let unionSet = new Set([...arr1, ...arr2]);
    return unionSet.size;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];


console.log(myfun(arr1, arr2));