// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
function merge(arr1, arr2){
    let merged = arr1.concat(arr2);
    merged.sort();
    return merged;
}

let arr1 = [3, 5, 1];
let arr2 = [4, 2];
console.log(merge(arr1, arr2));