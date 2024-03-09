function distributeChocolates(chocolates, m) {
    if (chocolates.length === 0 || m <= 0) {
        return 0;
    }

    chocolates.sort((a, b) => a - b);

    let minDifference = Infinity;

    for (let i = 0; i + m - 1 < chocolates.length; i++) {
        let currentDifference = chocolates[i + m - 1] - chocolates[i];
        minDifference = Math.min(minDifference, currentDifference);
    }

    return minDifference;
}

let chocolates = [111, 222, 333, 444, 555];
let students = 5;


console.log(distributeChocolates(chocolates, students));