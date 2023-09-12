// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

const myFavFoods = ["Noodle", "Beef", "KFC", "Pizza"];

// 1.
const mostFavFood = "Beef";
console.log(myFavFoods.indexOf(mostFavFood));

// 2.
const newFavFoods = myFavFoods.concat("Ice Cream", "Cake", "Cookies");
console.log(newFavFoods);

// Challenge
console.log(myFavFoods.includes(mostFavFood));
