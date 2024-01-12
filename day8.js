
const checkrepertedNum = (text) => {
    const count = {}
    for (let i = 0; i < text.length; i++) {
        if (!count.hasOwnProperty(text[i])) {
            count[text[i]] = 1
        } else {
            count[text[i]] = count[text[i]] + 1
        }
    }
    for (const item in count) {
        if (count[item] != 1) {
            console.log({ item: count[item] });
        }

    }
}
checkrepertedNum("geeksforgeeks")