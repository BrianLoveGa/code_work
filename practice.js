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

console.log(arrayNow("I love arrays they are my favorite"));
// console.log(arrayNow("Robin Singh"));
// console.log(arrayNow("CodeWars"));
console.log(arrayNow("1 2 3"));

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

console.log(greet("Fred", "Fred"));
console.log(greet("Tim", "Fred"));
console.log(greet("Sarah", "Sasha"));
console.log(greet("owner", "OWNER"));

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

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));

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

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));

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

console.log(apple("50"));
console.log(apple(4));
console.log(apple("12"));
console.log(apple(60));
console.log(apple(12));
console.log(apple(4.4));

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

console.log(bonusTime(10000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(10100, true));
console.log(bonusTime(1023, true));

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

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));

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

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);


// works

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// # Given an array of integers, return a new array with each value doubled.
// # For example:
// # [1, 2, 3] - -> [2, 4, 6]


function maps(a){
    
}