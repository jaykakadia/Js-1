/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

let arr=[1,0,0,0,1];
let n=2;
console.log(canPlaceFlowers(arr, n));

function canPlaceFlowers(arr, n) {
  if (n == 0) return true;
    if (n === 0) return true;

  if (arr[0] == 0 && arr[1] == 0) {
    n--;
    arr[0] = 1;   
  }
  if (n == 0) return true;

  for (let i = 1; i < arr.length - 1; i++) {
    if (check(i, arr)) {
      n--;
      arr[i] = 1;
      if (n == 0) return true;
    }
  }
  if (arr[arr.length - 1] == 0 && arr[arr.length - 2] == 0) n--;
  if (n == 0) return true;
  return false;
}
function check(i, arr) {
  if (arr[i - 1] == 0 && arr[i] == 0 && arr[i + 1] == 0) return true;
  return false;
}
