let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   move: function () {
      Math.floor(Math.random()*11)
   }
};
Math.random();
let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 7,
   move: function () {
      Math.floor(Math.random()*11)
   }
};
Math.random();
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 5,
   move: function () {
      Math.floor(Math.random()*11)
   }
};
Math.random();
let Beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 8,
   move: function () {
      Math.floor(Math.random()*11)
   }
};
Math.random();
let Tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 9,

move: function () {
   Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, Beagle, Tardigrade];
// Print out the relevant information about each animal.
//console.log(crew);

// Start an animal race!
function crewReports(crew){
   for (let i = 0; i < crew.length; i++ ){
      console.log(`${crew[i].name} is a ${crew[i].species}
         They are ${crew[i].age} years old and ${crew[i].mass} kilograms.
         Their astronaut ID is ${crew[i].astronautID}.`);
   }

   return;
};
   crewReports(crew);

   function fitnessTest(candidates){
      let results = [], numSteps, turns;
  
      for (let i = 0; i < candidates.length; i++){
          numSteps = 0;
          turns = 0;
  
       while(numSteps < 20){
          numSteps += candidates[i].move();
          turns++;
       }
  
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
  
   return results;
} 
  console.log(fitnessTest(crew));
