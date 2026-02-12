// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
arr1 = [1, 2, 3, 4, 5, 6];
arr2 = [3, 4, 5, 7];

function merge(arr1, arr2){
    let merged = [...arr1, ...arr2];
    let unique = [...new Set(merged)];
    return unique;
}
console.log(merge(arr1, arr2));