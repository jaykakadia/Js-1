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

let arr = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

console.log(removeDuplicateObjects(arr));

function removeDuplicateObjects(arr) {
    const seen = new Set();
    return arr.filter((obj) => {
    const key = obj.title + "|" + obj.author;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
    });
}


