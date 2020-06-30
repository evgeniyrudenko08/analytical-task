const calculations = require("./calculate");

describe("Analytical task about 4 players", async function () {
    it("Calculate of combinations", async function () {
        let allCombinations = [];

        for (let i = 1; i < 1000; i++) {
            const calc = await calculations.calculateOfNumbers();
            if (calc) {
                allCombinations.push(calc);
            }
        }

        const resultsWithNoDups = calculations.removeDuplicates(allCombinations).values();

        for (let array of resultsWithNoDups) {
            const finalArray = array.map(i => 'C' + i);
            console.log(finalArray);
        }
    });
});
