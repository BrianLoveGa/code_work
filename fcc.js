// basic algorithm scripts

// https://www.freecodecamp.org/learn

//  - me https://www.freecodecamp.org/fcc834d7277-a991-4083-bda5-6372b69a9f1e

//////////////////// Convert Celsius to Fahrenheit

// start _-_
// function convertToF(celsius) {
//   let fahrenheit;
//   return fahrenheit;
// }

// convertToF(30);

// terms _-_
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
//  Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent
//  to the given Celsius temperature. Use the algorithm mentioned above to help convert
//   the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit;
}

convertToF(30);

//////////////////// Reverse a String

// start _-_
// function reverseString(str) {
//   return str;
// }

// reverseString("hello");

// terms _-_
// Reverse the provided string. You may need to turn the string into an array before you can reverse it. 
// Your result must be a string. Remember to use Read-Search-Ask if you get stuck. Write your own code.

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");


//////////////////// Factorialize a Number

// start _-_
// function factorialize(num) {
//   return num;
// }

// factorialize(5);

// terms _-_
// Return the factorial of the provided integer. If the integer is represented with the letter n,
// a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120 Only integers greater than or equal to zero will be supplied to the function.
//  Remember to use Read-Search-Ask if you get stuck. Write your own code.

function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);

//////////////////// Find the Longest Word in a String

// start _-_
// function findLongestWordLength(str) {
//   return str.length;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// terms _-_
// Return the length of the longest word in the provided sentence. Your response should be a number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function findLongestWordLength(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//////////////////// Return Largest Numbers in Arrays

// start _-_
// function largestOfFour(arr) {
//   // You can do this!
//   return arr;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);

// terms _-_
// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays. 
// Remember, you can iterate through an array with a simple for loop, and 
// access each member with array syntax arr[i]. 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function largestOfFour(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);


//////////////////// Confirm the Ending

// start _-_
// function confirmEnding(str, target) {
//   // "Never give up and good luck will find you."
//   // -- Falcor
//   return str;
// }

// confirmEnding("Bastian", "n");

// terms _-_
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
//  Remember to use Read-Search-Ask if you get stuck. Write your own code.

function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//////////////////// Repeat a String Repeat a String

// start _-_
// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   return str;
// }

// repeatStringNumTimes("abc", 3);


// terms _-_
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function repeatStringNumTimes(str, num) {
  if (num < 1) return "";
  return num === 1 ? str : str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);


//////////////////// Truncate a String

// start _-_
// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   return str;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// terms _-_
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending. 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);



//////////////////// Finders Keepers
// start _-_
// function findElement(arr, func) {
//   let num = 0;
//   return num;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// terms _-_
// Create a function that looks through an array (first argument) and returns the first element in
// the array that passes a truth test (second argument). If no element passes the test, return undefined.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//////////////////// Boo who

// start _-_
// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   return bool;
// }

// booWho(null);

// terms _-_
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false. Remember to use Read-Search-Ask if you get stuck.
// Try to pair program. Write your own code.

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

//////////////////// Title Case a Sentence

// start _-_
// function titleCase(str) {
//   return str;
// }

// titleCase("I'm a little tea pot");

// terms _-_
// Return the provided string with the first letter of each word capitalized.
//  Make sure the rest of the word is in lower case. 
//  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". 
//  Remember to use Read-Search-Ask if you get stuck. Write your own code.


function titleCase(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}

titleCase("I'm a little tea pot");


//////////////////// Slice and Splice

// // start _-_
// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   return arr2;
// }

// frankenSplice([1, 2, 3], [4, 5, 6], 1);

// terms _-_
// You are given two arrays and an index. Use the array methods slice and splice to copy each element 
// of the first array into the second array, in order. Begin inserting elements at index n of the second array. 
// Return the resulting array. The input arrays should remain the same after the function runs. 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);



//////////////////// Falsy Bouncer

// start _-_
// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   return arr;
// }

// bouncer([7, "ate", "", false, 9]);

// terms _-_
// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean. Remember to use Read-Search-Ask if you get stuck. Write your own code.

function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);

//////////////////// Where do I Belong

// start _-_
// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   return num;
// }

// getIndexToIns([40, 60], 50);

// terms _-_
// Return the lowest index at which a value (second argument) should be inserted into an array 
// (first argument) once it has been sorted. The returned value should be a number. For example, 
// getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1). 
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted 
// it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). 
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);



//////////////////// Mutations

// start _-_
// function mutation(arr) {
//   return arr;
// }

// mutation(["hello", "hey"]);

// terms _-_
// Return true if the string in the first element of the array contains all of the letters of the
// string in the second element of the array. For example, ["hello", "Hello"], should return true
// because all of the letters in the second string are present in the first, ignoring case. The
// arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function mutation(arr) {
  let hash = Object.create(null);

  arr[0]
    .toLowerCase()
    .split("")
    .forEach(c => (hash[c] = true));

  return !arr[1]
    .toLowerCase()
    .split("")
    .filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);

//////////////////// Chunky Monkey

// start _-_
//   function chunkArrayInGroups(arr, size) {
//     Break it up.
//     return arr;
//  }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);

// terms _-_
// Write a function that splits an array (first argument) into groups the length of size (second argument)
//  and returns them as a two-dimensional array. Remember to use Read-Search-Ask if you get stuck.
//  Write your own code.

function chunkArrayInGroups(arr, size) {
  let out = [];

  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }

  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
