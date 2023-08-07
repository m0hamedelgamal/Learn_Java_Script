function myfun(start, end) {
  for (let i = start; i < end; i++) {
    console.log("The number is " + i);
  }
}
let x = myfun(0, 5);
console.log(x);
console.log("########################################");

function sum(...theArgs) {
  let total = 0;
  for (let arg = 0; arg <= theArgs.length; arg++) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));

function sum(...theArgs) {
  let total = 0;
  for (let arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
