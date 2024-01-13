const secondLargestNum = (value) => {
    let arr = value.sort()
    const scort = {}
    arr.map((item) => {
        if (scort.hasOwnProperty(item)) {
            scort[item] = scort[item] + 1
        } else {
            scort[item] = 1
        }
    })
    const newarr = Object.keys(scort)
    return newarr[1]
}

const arr = ["bbb", "aaa", "ccc", "bbb", "aaa", "aaa"]//bbb
const arr2 = ["geek", "for", "geek", "for", "geek", "aaa"]//for
console.log(secondLargestNum(arr))
console.log(secondLargestNum(arr2))