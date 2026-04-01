// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

const arr = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

console.log(removeDuplicateObjects(arr));

function removeDuplicateObjects(arr) {
    const seen = [];
    const uniqueArr = [];

    for (let i = 0; i < arr.length; i++ ) {
        const key = JSON.stringify(arr[i]);
        if (!seen.includes(key)) {
            seen.push(key);
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


