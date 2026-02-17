// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMostFrequent(arr));

function findMostFrequent(arr) {
    const frequency = {};
    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    let mostFrequentItem = -Number.MAX_VALUE;
    let maxFrequency = -Number.MAX_VALUE;
    for (const item in frequency) {
        if (frequency[item] > maxFrequency) {
            maxFrequency = frequency[item];
            mostFrequentItem = item;
        }
    }
    return { item: mostFrequentItem, frequency: maxFrequency };
}
