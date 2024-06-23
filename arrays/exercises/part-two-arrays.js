let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = 'space tether';
console.log(cargoHold);
//2) Remove the last item from the array with pop. Print the element removed and the updated array.
cargoHold.pop()
console.log(cargoHold);
//3) Remove the first item from the array with shift. Print the element removed and the updated array.
cargoHold.shift();
console.log(cargoHold);
//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.push("20 meters");
console.log(cargoHold);
cargoHold.unshift("1138");
console.log(cargoHold);
//5) using template literals print the array, and its length
console.log(`Cargo hold items: ${cargoHold.join(', ')}`);
console.log(`Number of items in the cargo hold: ${cargoHold.length}`);