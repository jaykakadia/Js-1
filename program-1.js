// Write a JavaScript program to clone an array.
const arr1 = [1, 2, 3, 4, 5]
const arr2 = new Array(arr1.length)
for (let a = 0; a < arr1.length; a++){
    arr2[a] = arr1[a]
}
console.log(arr2)