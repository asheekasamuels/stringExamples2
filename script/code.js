// let sentence = 'I Love programming.';
// string size
// let numOfChars = sentence.length;
// console.log(`number of characters: ${numOfChars}`);
// first character
// console.log(`first character: ${sentence.charAt(0)}`);
// last character
// console.log(`last character: ${sentence[numOfChars- 1]}`);
// check if the first character start with I vs i
// console.log(`first character start with I? ${sentence.startsWith('I')}`);

// greet function 
function greet (name) {
    console.log(`Hello ${name}`);
}
greet('Asheeka')

//multiply function 
function multiply(a, z) {
    console.log(`the result of ${a} multiplied by ${z} is ${a * z}`);
}
multiply(5, 5)

//TableOfFive function
function tableOfFive(num) {
    let result = num * 7
    console.log(`the result of ${num} multiplied by 7 is ${result}`)
    return result
    }
tableOfFive(7)