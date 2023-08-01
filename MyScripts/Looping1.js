// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
// let numbers = [];
// let strings = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     numbers.unshift(myFriends[i]);
//   }
//   else strings.unshift(myFriends[i]);
//   }

// console.log(numbers);
// console.log(strings);

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "damera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.write(`<div> <h1>We have ${myAdmins.length} admins </h1></div>`);
let counter = 0;
let i;
let result = [];
let j;
for (i = 0; i < myAdmins.length; i++) {
  document.write(`<div>The admin for team ${i + 1} is  ${myAdmins[i]} </div>`);
  document.write(`<div> <h1>Team members:</h1> </div>`);

  for (j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) == myAdmins[i].charAt(0))
      document.write(`<div> ${++counter} ${myEmployees[j]} </div>`);
  }
  document.write(`<hr>`);
  counter = 0;
}
