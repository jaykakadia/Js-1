// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
function merge(arr1, arr2){
    const newarr = []
    for (let i = 0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++){
        newarr.push(arr2[i]);
    }
    newarr.sort((a, b) => a - b);
    return newarr;
}

const arr1 = [];
const arr2 = [4, 2];
console.log(merge(arr1, arr2));