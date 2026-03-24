// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];
let input = [1, 2, [3, 4], [5, [6, 7]]];
let input2 = [1, [2, [3, [4, [5, [6, 7]]]]]];

// function flattenarr(input){
//     let output = [];
//     for (let i = 0; i < input.length; i++){
//         if (Array.isArray(input[i])){
//             let new_inner = input[i];
//             for (let j = 0; j < new_inner.length; j++){
//                 if (Array.isArray(new_inner[j])){
//                     let new_inner2 = new_inner[j];
//                     for (let k = 0; k < new_inner2.length; k++){
//                         output.push(new_inner2[k])
//                     }
//                 } else {
//                     output.push(new_inner[j])
//                 }
//             }
//         }else{
//             output.push(input[i])
//         }
//     }
//     return output
// }

function flatArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let temp = flatArray(arr[i]);
      for (let j = 0; j < temp.length; j++) {
        result.push(temp[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}


console.log(flatArray(input));
console.log(flatArray(input2));