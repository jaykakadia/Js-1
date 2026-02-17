// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

let input = "025468" ;
console.log(insertDashes(input));

function insertDashes(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        result += input[i];
        if (i < input.length - 1 && input[i] % 2 === 0 && input[i + 1] % 2 === 0) {
            result += "-";
        }
    }
    return result;
}