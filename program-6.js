// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
arr1 = [1, 2, 3, 4, 5, 6];
arr2 = [3, 4, 5, 7];

function merge(arr1, arr2){
    let newarr = []
    for (let i = 0; i < arr1.length; i++){
        newarr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++){
        newarr.push(arr2[i]);
    }
    newarr.sort();
    let unique_set = new Set(newarr);
    let unique_arr = []
    for (let i of unique_set){
        unique_arr.push(i);
    }
    return unique_arr;
}
console.log(merge(arr1, arr2));