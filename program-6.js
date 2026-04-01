// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
// solve using include .....
arr1 = [1, 7, 2, 3, 4, 5, 6];
arr2 = [3, 4, 5, 7, 8, 6, 1];
function merge(arr1, arr2) {
  const newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!newarr.includes(arr1[i])) {
      newarr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!newarr.includes(arr2[i])) newarr.push(arr2[i]);
  }
  // for (let i = 0; i < newarr.length; i++ ){
  //     let curr = newarr[i];
  //     for(let j = i+1; j < newarr.length; j++ ){
  //         if (newarr[j]===curr){
  //             newarr.splice(j, 1);
  //             j--;
  //         }
  //     }
  // }
  // witout using set
  return newarr;
}
console.log(merge(arr1, arr2));
