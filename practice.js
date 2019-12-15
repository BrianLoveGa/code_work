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

console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));

console.log(noSpace("8aaaaa dddd r     "));

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
console.log(arrayNow("Robin Singh"));
console.log(arrayNow("CodeWars"));
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



function digPow(n,p){
    
}