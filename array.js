const input = require('readline-sync')

let n = input.questionInt("size of the array : ");
let arr = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
for (let i = 1; i <= 3; i++){
    arr.unshift(arr.pop());
}
console.log(arr);