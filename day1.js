function reverceFun(value) {
    const length = value.length / 2
    let fristSt = []
    for (let i = 0; i < length; i++) {
        fristSt.push(value[i])
    }

    return fristSt
}
// first q1.......
// const text="A man, a plan, a canal: Panama"
// second q1.......
// const text="race a car"
// third q1.......
const text = " "


const string = text.toLowerCase().split(" ").join("").replace(/[^a-zA-Z ]/g, "")
const revercestring = string.split('').reverse().join("")
// console.log(string)
console.log(reverceFun(revercestring).join("") == reverceFun(string).join(""))
