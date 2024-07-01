//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charCodeAt(0));
console.log(language.charCodeAt(4));
let codes = [74, 83];
let characters = (String.fromCharCode(codes[0]) + String.fromCharCode(codes[1]));
console.log(characters);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let abbr = "JS"
console.log(`The abbreviation for ${language} is ${abbr}`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let searchChar = "t";
let replacementChar = "T";
let searchChar2 = "c";
let replacementChar2 = "C";
notTitleCase = notTitleCase.replace(searchChar, replacementChar);
notTitleCase = notTitleCase.replace(searchChar2, replacementChar2);
console.log(notTitleCase);

