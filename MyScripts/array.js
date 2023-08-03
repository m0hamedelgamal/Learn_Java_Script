let myarray = ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"];
console.log(myarray);
console.log(myarray.length);

let x = myarray.push("test01");
console.log(myarray);
console.log(x);
console.log(typeof x);

let y = myarray.unshift("first");
console.log(myarray);
console.log(y);
console.log(typeof y);

let z = myarray.shift();
console.log(myarray);
console.log(z);
console.log(typeof z);

let zz = myarray.pop();
console.log(myarray);
console.log(zz);
console.log(typeof zz);
myarray.shift();
// console.log(myarray);
// console.log(myarray.length);

let aaa = ["01", "No", "t", "Aa"];
let aa = ["01", "Nao", "at", "aAa"];

let c = aaa.concat(aa);
console.log(c);
console.log(typeof c);

console.log(c.sort());
