// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

function merge(arr1, arr2) {
  let newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!newarr.includes(arr1[i])) newarr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!newarr.includes(arr2[i])) newarr.push(arr2[i]);
  }
  return newarr.sort((a,b) => a-b);
}
console.log(merge(arr1, arr2));