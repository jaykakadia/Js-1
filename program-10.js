// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

arr1 = [1, 0, 2, 3, 4];
arr2 = [3, 5, 6, 7, 8, 13];

function add(arr1 , arr2){
    ans = [];
    for (let i = 0 ; i < arr1.length && i < arr2.length; i++){
        ans.push(arr1[i]+arr2[i]);
    }
    let i = Math.min(arr1.length , arr2.length);
    if (arr1.length > arr2.length){
        for (i ; i < arr1.length; i++){
            ans.push(arr1[i]);
        }
    }
    else if (arr2.length > arr1.length){
        for (i ; i < arr2.length; i++){
            ans.push(arr2[i]);
        }
    }
    return ans;
}

console.log(add(arr1,arr2));
