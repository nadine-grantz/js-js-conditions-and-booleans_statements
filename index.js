console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "halleluja";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

//Part 3: Hotdogs
const numberOfHotdogs = 50;

if (numberOfHotdogs <= 5) {
  console.log(numberOfHotdogs * 2 + " Euro");
} else if (numberOfHotdogs > 5 && numberOfHotdogs <= 100) {
  console.log(numberOfHotdogs * 1.5 + " Euro");
} else if (numberOfHotdogs > 100 && numberOfHotdogs <= 1000000) {
  console.log(numberOfHotdogs * 1 + " Euro");
} else {
  console.log(numberOfHotdogs * 0.1 + " Euro");
}

// Part 4: Daytime
const currentHour = 10;

const statement = currentHour < 17 ? "Still need to lern" : "Partytime!!!";

console.log(statement);

// if (currentHour < 17) {
//   statement = "Still need to lern";
//   console.log(statement);
// } else {
//   statement = "Parttime!!!";
//   console.log(statement);
// }

// Part 5: Greeting
const vorname = "Jessica";
const greeting = "Hello " + (vorname === "Jessica" ? "Coach" : vorname) + "!";
console.log(greeting);
