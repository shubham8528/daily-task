var numJewelsInStones = function (jewels, stones) {
    const newArr = []
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] == stones[i]) {
                newArr.push(jewels[j])
            }
        }

    }
    return newArr.length
};
console.log(numJewelsInStones(["z"], ["Z", "Z"]))
