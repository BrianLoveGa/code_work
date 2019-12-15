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