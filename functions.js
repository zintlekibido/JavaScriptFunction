// TODO: Create a function called 'multiply' that takes 3 different numbers and multiplies them together.
function multiply(x, y, z) {
  return x * y * z;
}
console.log(9*6*3)
// TODO: Create a function expression called 'convertToSeconds' that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(numberOfMinutes) {
  return numberOfMinutes * 60;
}
console.log(35*60)
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. ***Do not use console.log() inside of the function***
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(((77 - 32) * 5) / 9);
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function***
function reverseString(brand) {
  return brand.split("").reverse().join("");
}
console.log(reverseString("Poetry"));

// TODO: Create a function that takes in a string and returns the number of vowels in the sentence. ***Do not use console.log() inside of the function***
function countVowels(socialmediaPlatform) {
  return (socialmediaPlatform.match(/[aeiouy]/gi) || []).length;
}
console.log(countVowels("Facebook"))

// TODO: Create an "isPrime" function that takes a number as a parameter and returns true if the number is prime, and false otherwise.
function isPrime(number) {
  if (!Number.isInteger(number) || number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(3))

