// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "India 2023"
console.log(cohort.split(" "))

// a) Your answer: "India" "2023"
// b) Verify and explain: The output was 'India' '2023'. .split(" ") tells the computer to break up the string at the " " character which results in 2 seperate strings. Would there have been more words in the string the .split would have seperated all words at the spaces and returned each resulting seperate string after the split.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: It will not return the intended `Hello, LEARN Student!`
// b) Verify and explain: The computer returned undefined. The reason the computer returned undefined is because the code lacked the return before the string interpolation.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The output was [11, 13, 15]. The output was this because onlyOdds is taking in the given array, .filtering (which is returning a smaller array), and applying a filtering that is removing any number in the array that does not have a remainder of zero when divided by 2.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The output was JavaScript. The created object of myCodingSkills contains several key value pairs. By using .languages[0] we are referencing the pair of languages and specifically the zero indices of languages within the object myCodingSkills.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George"
// b) Verify and explain: The output was Learn { student: 'George', cohort: 'India', year: 2023 }. I forgot that console logging a newly created instance would output all the data that was already in the class. 
