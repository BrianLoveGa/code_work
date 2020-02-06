// should be able to node this in terminal but python first so
// console log to an html file

// Simple, remove the spaces from the string, then return the resultant string.

// Test.assertEquals(
//   noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"),
//   "8j8mBliB8gimjB8B8jlB"
// );
// Test.assertEquals(
//   noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
//   "88Bifk8hB8BB8BBBB888chl8BhBfd"
// );
// Test.assertEquals(noSpace("8aaaaa dddd r     "), "8aaaaaddddr");

function noSpace(x) {
  str = x.replace(/\s+/g, "");

  return str;
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));

// console.log(noSpace("8aaaaa dddd r     "));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Convert a string to an array
// # "Robin Singh" == > ["Robin", "Singh"]

// # "I love arrays they are my favorite" == >
// # ["I", "love", "arrays", "they", "are", "my", "favorite"]

function arrayNow(str) {
  ans = str.split(" ");
  return ans;
}

// console.log(arrayNow("I love arrays they are my favorite"));
// console.log(arrayNow("Robin Singh"));
// console.log(arrayNow("CodeWars"));
// console.log(arrayNow("1 2 3"));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Create a function that gives a personalized greeting.
// #  This function takes two parameters: name and owner.
// # Use conditionals to return the proper message:
// # case return
// # name equals owner	'Hello boss'
// # otherwise	'Hello guest'

function greet(name, owner) {
  if (name.toLowerCase() === owner.toLowerCase()) {
    return "hello Boss";
  } else {
    return "hello Guest";
  }
}

// console.log(greet("Fred", "Fred"));
// console.log(greet("Tim", "Fred"));
// console.log(greet("Sarah", "Sasha"));
// console.log(greet("owner", "OWNER"));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Some numbers have funny properties. For example:

// # 89 - -> 8¹ + 9² = 89 * 1
// # 695 - -> 6² + 9³ + 5⁴ = 1390 = 695 * 2
// # 46288 - -> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// # Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// # we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// # In other words:
// # Is there an integer k such as: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k
// # If it is the case we will return k, if not return -1.
// # Note: n and p will always be given as strictly positive integers.
// # dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// # dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// # dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴ = 1390 = 695 * 2
// # dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
  let digits = n.toString().split("");
  //console.log(digits);
  let pwr = p;
  let pwrDigits = [];

  for (let i = 0; i < digits.length; i++) {
    let number = Number(digits[i]);
    //console.log(number);
    let numOut = number ** pwr;
    pwrDigits.push(numOut);
    //console.log(pwrDigits)
    pwr += 1;
  }

  let summed = pwrDigits.reduce((a, b) => a + b, 0);
  //console.log(summed);
  let k = summed / n;
  //console.log(k);

  if (summed % n === 0) {
    return k;
  } else {
    return -1;
  }
}

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(695, 2));
// console.log(digPow(46288, 3));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Bob is preparing to pass IQ test. The most frequent task in this test is to find out which
// # one of the given numbers differs from the others. Bob observed that one number usually differs
// # from the others in evenness. Help Bob — to check his answers, he needs a program that among the
// # given numbers finds one that is different in evenness, and return a position of this number.

// # ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the
// # elements start from 1 (not 0)

// # ##Examples :
// # iq_test("2 4 7 8 10") = > 3 // Third number is odd, while the rest of the numbers are even
// # iq_test("1 2 1 1") = > 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
  let indexOdd = 0;
  let indexEven = 0;

  newNumbers = numbers.split(" ");

  let countOdd = 0;
  let countEven = 0;

  for (let i = 0; i < newNumbers.length; i++) {
    if (Number(newNumbers[i]) % 2 === 0) {
      countEven += 1;
      indexEven = i + 1;
    } else {
      countOdd += 1;
      indexOdd = i + 1;
    }
  }

  if (countEven === 1) {
    return indexEven;
  } else {
    return indexOdd;
  }
}

// console.log(iqTest("2 4 7 8 10"));
// console.log(iqTest("1 2 1 1"));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Alan Partridge II - Apple Turnover
// # Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!',
// # else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

// # X will be either a number or a string. Both are valid.

function apple(x) {
  let y = Number(x);
  if (y * y > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox.";
  }
}

// console.log(apple("50"));
// console.log(apple(4));
// console.log(apple("12"));
// console.log(apple(60));
// console.log(apple(12));
// console.log(apple(4.4));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Build a function that takes in two arguments(salary, bonus).
// # Salary will be an integer, and bonus a boolean.

// # If bonus is true, the salary should be multiplied by 10.
// # If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// # Return the total figure the individual will receive as a string prefixed with "£" (="\u00A3", JS, Go, and Java),
// # "$" (C  # , C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua)
// # or "¥" (Rust).

function bonusTime(salary, bonus) {
  if (bonus === true) {
    let sal = salary * 10;
    return "£ " + sal.toString();
  } else {
    return "£ " + salary.toString();
  }
}

// console.log(bonusTime(10000, true));
// console.log(bonusTime(10000, false));
// console.log(bonusTime(10100, true));
// console.log(bonusTime(1023, true));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Task
// # Given an integral number, determine if it's a square number:
// # In mathematics, a square number or perfect square is an integer that is the square of an integer
// # in other words, it is the product of some integer with itself.
// # The tests will always use some integral number, so don't worry about that in dynamic typed languages.

function isSquare(n) {
  if (n < 0) {
    return false;
  } else if (n === 0) {
    return true;
  } else {
    a = Math.sqrt(n);
    if (Number.isInteger(a) === true) {
      return true;
    } else {
      return false;
    }
  }
}

// console.log(isSquare(-1));
// console.log(isSquare(0));
// console.log(isSquare(3));
// console.log(isSquare(4));
// console.log(isSquare(25));

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # For every good kata idea there seem to be quite a few bad ones!
// # In this kata you need to check the provided array(x) for good ideas 'good' and bad ideas 'bad'.
// # If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
// # If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let g = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      g += 1;
    }
  }
  if (g === 0) {
    return "Fail!";
  } else if (g <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

// console.log(well(["bad", "bad", "bad"]));
// console.log(well(["good", "bad", "bad", "bad", "bad"]));
// console.log(
//   well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
// );

// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Given an array of integers, return a new array with each value doubled.
// # For example:
// # [1, 2, 3] - -> [2, 4, 6]

function maps(x) {
  let dbl = [];
  for (let i = 0; i < x.length; i++) {
    dbl.push(x[i] * 2);
  }
  return dbl;
}

// console.log(maps([1, 2, 3]));
// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Write a function named sumDigits which takes a number as
// input and returns the sum of the absolute value of each
// of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5

// console.log("SUMmmm");

// function sumDigits(number) {
//   let n = number.toString();
//   console.log(n);
//   if (n < 0) {
//     n * -1;
//   } else {
//     n * 1;
//   }
//   p = n.split("").map(Number);
//   console.log(p);
//   const add = (a, b) => a + b;

//   const sum = p.reduce(add);
//   console.log(sum);
//   return sum;
// }

// sumDigits(-32);

// console.log("yep");
// /// works on positive, just to make it work for negative now....

// // Write a function called repeatString which repeats the given
// // String src exactly count times.

// // repeatStr(6, "I") // "IIIIII"
// // repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(6, "I"));

// // works

// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// // Your task is to create a function that does four basic mathematical operations.

// // The function should take three arguments - operation(string/char), value1(number), value2(number).
// // The function should return result of numbers after applying the chosen operation.

// // Examples
// // basicOp('+', 4, 7)         // Output: 11
// // basicOp('-', 15, 18)       // Output: -3
// // basicOp('*', 5, 5)         // Output: 25
// // basicOp('/', 49, 7)        // Output: 7

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }

// console.log("CHECK CHECK CHECK");
// console.log(basicOp("/", 49, 7));

// // works

// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// // The wide mouth frog is particularly interested in the eating habits of other creatures.

// // He just can't stop asking the creatures he encounters what they like to eat.
// // But then he meet the alligator who just LOVES to eat wide-mouthed frogs!

// // When he meets the alligator, it then makes a tiny mouth.

// // Your goal in this kata is to create complete the mouth_size method this method take one argument
// // animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive)
// // return small otherwise return wide.

// function mouthSize(animal) {
//   // code here
//   if (animal.toLowerCase() === "alligator") {
//     return "small";
//   } else {
//     return "wide";
//   }
// }

// console.log(mouthSize("toucan"));

// /// update check

// // works

// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// // Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// // Example:
// // isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// // isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
// // isDivisible(100,5,3)--> false because 100 is not divisible by 3
// // isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

// function isDivisible(a, b, c) {
//   if (a % b === 0 && a % c === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isDivisible(3, 1, 3));

// console.log(isDivisible(12, 2, 6));

// console.log(isDivisible(100, 5, 3));

// console.log(isDivisible(12, 7, 5));

// // works
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// function nextInLine(arr, item) {
//   // Your code here
//   let sk = arr.push(item);
//   let st = sk.unshift();
//   return st[0]; // Change this line
// }

// // Test Setup
// var testArr = [1, 2, 3, 4, 5];

// ////////////////

// function setAlarm(employed, vacation) {
//   if (employed == "true" && vacation == "false") {
//     return true;
//   } else {
//     return false;
//   }
// }

// // works
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// // # Write a function that always returns 5

// // # Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// // # Good luck  : )
// function unusualFive() {
//   let arr = ["h", "e", "l", "l", "o"];
//   return arr.length;
// }

// console.log(unusualFive());
// // works
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// // Task
// // Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

// // Input/Output
// // [input] string lastPlayer/$last_player

// // "black" or "white" - whose move it was during the previous round.

// // [input] boolean win/$win

// // true if the player who made a move during the previous round won, false otherwise.

// // [output] a string

// // Return "white" if white is to move on the next round, and "black" otherwise.

// // Example
// // For lastPlayer = "black" and win = false, the output should be "white".

// // For lastPlayer = "white" and win = true, the output should be "white".

// function whoseMove(lastPlayer, win) {
//   if (win === true) {
//     return lastPlayer;
//   } else {
//     if (lastPlayer === "white") {
//       return "black";
//     } else {
//       return "white";
//     }
//   }
// }

// console.log("below here buddy");
// // works
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// function nextInLine(arr, item) {
//   // Your code here
//   arr.push(item);
//   let a = arr[0];
//   arr = arr.shift();

//   return a;
// }

// // Test Setup
// var testArr = [1, 2, 3, 4, 5];

// console.log(nextInLine([], 5)); //// should return a number.
// console.log(nextInLine([], 1)); // should return 1
// console.log(nextInLine([2], 1)); //  should return 2
// console.log(nextInLine([5, 6, 7, 8, 9], 1)); // should return 5
// //   After nextInLine(testArr, 10), testArr[4] //   should be 10
// console.log(nextInLine(testArr, 10));
// console.log(testArr);

// // works

// // // Basic JavaScript: Golf Code
// // // In the game of golf each hole has a par meaning the average number of strokes a golfer is
// // // expected to make in order to sink the ball in a hole to complete the play.
// // // Depending on how far above or below par your strokes are, there is a different nickname.

// var names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!"
// ];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   let x = 0;
//   if (strokes === 1) {
//     x += 0;
//   } else if (strokes > 1) {
//     let k = strokes - par;
//     //console.log(k);
//     if (k <= -2) {
//       x += 1;
//     } else if (k === -1) {
//       x += 2;
//     } else if (k === 0) {
//       x += 3;
//     } else if (k === 1) {
//       x += 4;
//     } else if (k === 2) {
//       x += 5;
//     } else if (k >= 3) {
//       x += 6;
//     }
//   }

//   console.log(names[x]);
//   return names[x];

//   // Only change code above this line
// }

// console.log("GOLF STUFF HERE");
// // Change these values to test
// golfScore(5, 4); // //  should return "Birdie"
// golfScore(4, 1); // //  should return "Hole-in-one!"
// golfScore(4, 2); // //  should return "Eagle"
// golfScore(5, 2); // //  should return "Eagle"
// golfScore(4, 3); // //  should return "Birdie"
// golfScore(4, 4); // //  should return "Par"
// golfScore(1, 1); // //  should return "Hole-in-one!"
// golfScore(5, 5); // //  should return "Par"
// golfScore(4, 5); // //  should return "Bogey"
// golfScore(4, 6); // //  should return "Double Bogey"
// golfScore(4, 7); // //  should return "Go Home!"
// golfScore(5, 9); // //  should return "Go Home!"

// function chainToSwitch(val) {
//   var answer = "";
//   // Only change code below this line
//   switch (val) {
//     case "bob":
//       answer = "Marley";
//       break;
//     case 42:
//       answer = "The Answer";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break;
//     default:
//       answer = "";
//       break;
//   }

//   // Only change code above this line
//   return answer;
// }

// // Change this value to test
// console.log(chainToSwitch(7));

// // Modify the function abTest so that if a or b are less than 0
// // the function will immediately exit with a value of undefined.
// // Setup

// // function abTest(a, b) {
// //      // Only change code below this line

// //     // Only change code above this line

// //         return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// // }

// // Setup
// var jim = "";
// function abTest(a, b) {
//   // Only change code below this line
//   if (a < 0 || b < 0) {
//     return undefined;
//   } else {
//     // Only change code above this line

//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }
// }
// // Change values below to test your code
// console.log(abTest(2, 2));
// console.log(abTest(-2, 2));
// console.log(abTest(2, 8));
// console.log(abTest(2, -7));
// console.log("CARDS")

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   var b = card.split(',').map(function(item){
//     return parseInt(item, 10);
//   })

//   // loop thru cards
//   for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
//     if (b[i] <= 6) {
//       count += 1;
//       console.log(count);
//     } else if (b[i] === 7 || b[i] === 8 || b[i] === 9) {
//       count = +0;
//     } else {
//       count -= 1;
//     }
//   }
//   // if less than or equal to 6
//   // add 1 to count for each

//   // if 7 8 or 9 add 0 to count

//   // if 10,j,q,k,or a subtract 1 from count for each

//   // case 1 or more in count - return bet
//   // case 2 0 or less in count - return hold
//   if (count > 1) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//     // Only change code above this line
//   }
// }

// console.log(cc(2, 3, 4, 5, 6));

// console.log(cc(7, 8, 9));

// console.log(cc(10, "J", "Q", "K", "A"));

// console.log(cc(3, 7, "Q", 8, "A"));

//////////// works

// // Setup
// var myArray = [];

// // Only change code below this line.
// var i = 0;
// while (i <= 5){
//     myArray.unshift(i);
//     i++;
// }

// console.log(myArray);

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 0; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray);

// Jenny's secret message
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// function greet(name) {
//   return "Hello, " + name + "!";
//   if (name === "Johnny") return "Hello, my love!";
// }

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

//////////// works

// # Return the number(count) of vowels in the given string.

// # We will consider a, e, i, o, and u as vowels for this Kata.

// # The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let vowel_list = "aeiouAEIOU";

  for (var x = 0; x < str.length; x++) {
    if (vowel_list.indexOf(str[x]) !== -1) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

//////////// works



// It's too hot, and they can't even…
// One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

// Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

// Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.

// The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

// Task
// Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.



function divide(weight) {
  //your code here
  if (weight == 2) {
    return false;
  } else {
    if (weight % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}


//////////// works



// # * No Loops Allowed *

// # You will be given an array (a) and a value (x).
// #  All you need to do is check whether the provided array contains the value, without using a loop.

// # Array can contain numbers or strings. X can be either.
// #  Return true if the array contains the value, false if not. 
// # With strings you will need to account for case.

function check(a,x){

  if (a.includes(x)){
    return true
  } else {
    return false
  }

};


/// works check passed yep