// Write a JavaScript program to clone an array.
arr1 = [1, 2, 3, 4, 5]
arr2 = []
for (let a in arr1){
    arr2.push(arr1[a])
}
console.log(arr2)