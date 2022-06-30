const snackServings = 40;
const guests = 10;
//#1
console.log(`Q1: ${snackServings + guests}`);

//#2
console.log(`Q2: ${guests - snackServings}`);
console.log(`Q2: ${snackServings - guests}`);

//#3

console.log(`Q3: ${snackServings * guests}`);

//#4

console.log(`Q4: ${snackServings / guests}`);

//#5

const drinks = 10;

const resultOne = (snackServings * guests) / drinks;

console.log("Q5: " + resultOne);

//#6

const monkeys = 15;
const bananas = 9;

console.log(`Q6: ${monkeys / bananas}`);

//#7

const monkeyfights = 20;
const resultTwo = (monkeys + bananas) * monkeyfights;
console.log("Q7: " + resultTwo);

//#8

let monkeyBusiness = 90;

monkeyBusiness++;

console.log("Q8: " + monkeyBusiness);

//#9

let boredom = 13;

boredom--;

console.log("Q9: " + boredom);

//#10
const happiness = monkeys - bananas;
console.log(`Q10: ${happiness + monkeys}`);

//#11

console.log(`${resultOne % resultTwo}`);
