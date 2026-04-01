// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
function mergesort(arr1){
    if (arr1.length <= 1){
        return arr1
    }
    
    const mid = Math.floor(arr1.length/2);
    const left = arr1.slice(0, mid);
    const right = arr1.slice(mid);
    return merge(mergesort(left), mergesort(right))
}
function merge(left, right){
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length){
        if (left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length){
        result.push(left[i]);
        i++;
    }
    while (j < right.length){
        result.push(right[j]);
        j++;
    }
    return result
}
console.log(mergesort(arr1));