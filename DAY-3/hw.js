// Q4 move all arrays to the end of the array
let arr = [0, 1, 0, 3, 0, 5];
let result = [];
let zeroCount = 0;

while (arr.length > 0) {
    let val = arr.shift();
    if (val === 0) {
        zeroCount++;
    }
    else {
        result.push(val);
    }
}

while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
}

console.log(result); 
