// Q96
// this function calculate sum of all num using .reduce
function sumofallnumbers(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}
const arr = [1, 2, 3, 4, 5];
console.log(sumofallnumbers(arr));