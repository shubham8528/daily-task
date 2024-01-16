function strStr(A, B) {
    const changeStr = A.split("")
    const orgStr = B.split("")
    for (let i = changeStr.length; i >= 0; i--) {
        if (orgStr[i] !== changeStr[i] && changeStr[i] != undefined) {
            orgStr.unshift(changeStr[i])
            return (i)
        }
    }
}

// Example usage:
let A = "EACBD"
let B = "EABCD"

let result = strStr(A, B);
console.log(result)