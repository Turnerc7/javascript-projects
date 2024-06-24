let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let newArray  = str.split(' ')
console.log(newArray);
// The parameter inside the () represents the delimiter which decides where the string should be split.
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinedString = arr.join("");
console.log(joinedString);
//The purpose of the parameter inside of () is to display what is put in between the items in the array - (, or a space etc...)
//3) Do split or join change the original string/array?
console.log(str);
//No split or join do not alter the original string/array.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let newCargoArray = cargoHold.split(',');
newCargoArray.sort();
alphaCargoArray = newCargoArray.join(', ');
console.log(alphaCargoArray);
