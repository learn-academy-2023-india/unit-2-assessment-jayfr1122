// ASSESSMENT 2: Coding Practical Questions with Jest

const { notDeepEqual } = require("assert")
const { default: test } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
describe("multiplyByThree", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        const numbersArray2 = [24, 27, 30, 33, 36]
        expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})
// Fails at line 25 expect.
// b) Create the function that makes the test pass.
const multiplyByThree = (array) => {
    return array.map(value => {
        return value * 3
    })
}
// Passes the test.
// Pseudo code:
//-create test
//-takes in array of numbers
//-returns array(s) multiplied by two
//-create the function

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
describe("divisByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        const object2 = { number: 0 }
        const object3 = { number: -7 }
        expect(divisByThree(object1)).toEqual("15 is divisible by three")
        expect(divisByThree(object2)).toEqual("0 is divisible by three")
        expect(divisByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
//Fails at line 61 expect.
// b) Create the function that makes the test pass.
const divisByThree = (value) => {
    if (value.number % 3 === 0) {
        return `${value.number} is divisible by three`
    } else {
    return `${value.number} is not divisible by three`
    }
}
//Passes the test.
// Pseudo code:
// -create test
// -takes an object as an argument 
// -decides if the number is evenly divisible by 3 or not
// -create function
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
describe("capWord", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        expect(capWord(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capWord(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
//Failed  at line 93 expect.
// b) Create the function that makes the test pass.
const capWord = (array) => {
    return array.map(value => {
        if (typeof value === "string" && value.length > 0) {
            return value[0].toUpperCase() + value.slice(1)
        }else {
            return value
        }
    })
}
//Passes the test.
// Pseudo code:
//-create test
//-takes an array of words
//-returns array with all words capitalized