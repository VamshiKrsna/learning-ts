let age = prompt("Enter your Age : ");
let ageNumber = parseInt(age); 

if (isNaN(ageNumber)) {
    console.log("Please enter a valid age.");
} else if (ageNumber >= 18) {
    console.log("You may vote.");
} else if (ageNumber > 100) {
    console.log("Are you SuperHuman ?");
} else {
    console.log(`You can't vote for ${18 - ageNumber} years`);
}
