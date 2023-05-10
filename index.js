/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
const my_name = "Sultan AlFarhan"
const myobth = 1990
let my_hobby = "chess" 
let funfact = "ablaah"
let _image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNGJjNWU4YWEtODUxMi00ZjcyLWI2NWQtZTc0MWMwNzE0OGMyXkEyXkFqcGdeQXVyNDM3NjIwNDI%40._V1_FMjpg_UX1000_.jpg&tbnid=Mwgb-ULPMElbdM&vet=12ahUKEwj2ttDdk-b-AhV7vicCHd2UDKkQMygCegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt12035642%2F&docid=30My7l0Ey_J6WM&w=1000&h=1400&q=chess%20master&ved=2ahUKEwj2ttDdk-b-AhV7vicCHd2UDKkQMygCegUIARDhAQ"

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${my_name}`;
const yearOfBirthString = `I am ${2023 - myobth}`
const hobbyString = `my hobby is ${my_hobby}`




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars = stars + 1 
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars = stars - 1
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars + 2
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars = stars - 2
}
