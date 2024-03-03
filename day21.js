const reverceFun = (item) => {
    const arr = []
    let count = item.length - 1
    console.log(count)
    while (count >= 0) {
        arr.push(item[count])
        count--
    }
    console.log(arr)
}
reverceFun([1, 2, 3])