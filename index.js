// Q96
// this function calculate sum of all num using .reduce
function sumofallnumbers(arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0);
}
var arr = [1, 2, 3, 4, 5];
console.log(sumofallnumbers(arr));
