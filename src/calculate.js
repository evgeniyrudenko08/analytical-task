  async function calculateOfNumbers() {
    const cells = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];
    const oneArray = cells.slice(0, 4);
    const firstRanNum = await randomItem(oneArray);

    const firstArray = await getCorrectDigits(firstRanNum, cells);

    const secRanNum = await randomItem(firstArray);

    const secondArray = await getCorrectDigits(secRanNum, firstArray);

    const thirdRanNum = await randomItem(secondArray);

    const thirdArray = await getCorrectDigits(thirdRanNum, secondArray);

    const finalNumbers = Array(firstRanNum, secRanNum, thirdRanNum, parseInt(thirdArray));

    if (!finalNumbers.includes(NaN)) {
        return finalNumbers.sort();
    }
}

const getFirstNumberOfDigit = n => {
    const digit = n.toString().charAt(0);
    return parseInt(digit);
}
const getLastNumberOfDigit = n => {
    const digit = n.toString().slice(-1);
    return parseInt(digit);
}
async function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)]
}

async function getCorrectDigits(number, arrayOfDigits) {
    let newArray = [];
    for (let c of arrayOfDigits) {
        if ((getFirstNumberOfDigit(number) - getLastNumberOfDigit(number)) !== 0 && (getFirstNumberOfDigit(number) + getLastNumberOfDigit(number)) !== 5) {
            if (getFirstNumberOfDigit(c) !== getFirstNumberOfDigit(number) && getLastNumberOfDigit(number) !== getLastNumberOfDigit(c)) {
                 newArray.push(c);
            }
        }
        else if (getFirstNumberOfDigit(number) - getLastNumberOfDigit(number) === 0) {
            if (getFirstNumberOfDigit(c) !== getFirstNumberOfDigit(number) && getLastNumberOfDigit(number) !== getLastNumberOfDigit(c) && getFirstNumberOfDigit(c) - getLastNumberOfDigit(c) !== 0) {
                newArray.push(c);
            }
        }
        else {
            if (getFirstNumberOfDigit(c) !== getFirstNumberOfDigit(number) && getLastNumberOfDigit(number) !== getLastNumberOfDigit(c) && (getFirstNumberOfDigit(c) + getLastNumberOfDigit(c)) !== 5) {
                newArray.push(c);
            }
        }
    }
    return newArray;
}

function removeDuplicates(array) {
    return array.filter((t = {}, a => !(t[a] = a in t)));
}

module.exports = {calculateOfNumbers, removeDuplicates};

