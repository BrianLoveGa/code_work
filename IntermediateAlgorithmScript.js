//\\ _-_ Free Code Camp

// Intermediate Algorithm Scripting: Sum All Numbers in a Range

function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

// Intermediate Algorithm Scripting: Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  var h1 = Object.create(null);
  arr1.forEach(function(e) {
    h1[e] = e;
  });

  var h2 = Object.create(null);
  arr2.forEach(function(e) {
    h2[e] = e;
  });

  Object.keys(h1).forEach(function(e) {
    if (!(e in h2)) newArr.push(h1[e]);
  });
  Object.keys(h2).forEach(function(e) {
    if (!(e in h1)) newArr.push(h2[e]);
  });
  // Same, same; but different.
  return newArr;
}

// Intermediate Algorithm Scripting: Seek and Destroy

function destroyer(arr) {
  var hash = Object.create(null);
  [].slice.call(arguments, 1).forEach(function(e) {
    hash[e] = true;
  });
  // Remove all the values
  return arr.filter(function(e) {
    return !(e in hash);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Intermediate Algorithm Scripting: Wherefore art thou

function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  collection.forEach(function(e) {
    if (
      keys.every(function(key) {
        return e[key] === source[key];
      })
    ) {
      arr.push(e);
    }
  });
  return arr;
}

// Intermediate Algorithm Scripting: Spinal Tap Case
// rock and roll - to 11

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z](?=[A-Z]))/g, "$1 ");
  return str.toLowerCase().replace(/\ |\_/g, "-");
}
spinalCase("This Is Spinal Tap");

// Intermediate Algorithm Scripting: Pig Latin
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split("");
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join("") + "ay";
}

function isVowel(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}
translatePigLatin("consonant");

// Intermediate Algorithm Scripting: Search and Replace
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Intermediate Algorithm Scripting: DNA Pairing

var lookup = Object.create(null);
lookup.A = "T";
lookup.T = "A";
lookup.C = "G";
lookup.G = "C";

function pairElement(str) {
  return str.split("").map(function(p) {
    return [p, lookup[p]];
  });
}
pairElement("GCG");

// Intermediate Algorithm Scripting: Missing letters

function fearNotLetter(str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}
fearNotLetter("abce");

// Intermediate Algorithm Scripting: Sorted Union

function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(
      a,
      b.filter(function(e) {
        return a.indexOf(e) === -1;
      })
    );
  }, []);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Intermediate Algorithm Scripting: Convert HTML Entities

var MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(c) {
    return MAP[c];
  });
}
convertHTML("Dolce & Gabbana");

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, (b = b + a)][0];
  }
  return s;
}

// Intermediate Algorithm Scripting: Sum All Primes

function eratosthenesArray(n) {
  var primes = [];
  if (n > 2) {
    var half = n >> 1;
    var sieve = Array(half);
    for (var i = 1, limit = Math.sqrt(n) >> 1; i <= limit; i++) {
      if (!sieve[i]) {
        for (
          var step = 2 * i + 1, j = (step * step) >> 1;
          j < half;
          j += step
        ) {
          sieve[j] = true;
        }
      }
    }
    primes.push(2);
    for (var p = 1; p < half; p++) {
      if (!sieve[p]) primes.push(2 * p + 1);
    }
  }
  return primes;
}

function sumPrimes(num) {
  return eratosthenesArray(num + 1).reduce(function(a, b) {
    return a + b;
  }, 0);
}

sumPrimes(10);

// Intermediate Algorithm Scripting: Smallest Common Multiple

function gcd(a, b) {
  while (b !== 0) {
    a = [b, (b = a % b)][0];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}

smallestCommons([1, 5]);

// Intermediate Algorithm Scripting: Drop it

function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
dropElements([1, 2, 3], function(n) {
  return n < 3;
});

//Intermediate Algorithm Scripting: Steamroller

function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}

/// Intermediate Algorithm Scripting: Binary Agents

function binaryAgent(str) {
  return str
    .split(" ")
    .map(function(s) {
      return parseInt(s, 2);
    })
    .map(function(b) {
      return String.fromCharCode(b);
    })
    .join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

//  Intermediate Algorithm Scripting: Everything Be True

function truthCheck(collection, pre) {
  // Does everyone have one of these?
  return collection.every(function(e) {
    return e[pre];
  });
}
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

// Intermediate Algorithm Scripting: Arguments Optional

function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== "[object Number]") return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== "[object Number]") return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== "[object Number]") return;
  return a + arguments[1];
}
addTogether(2, 3);

// Intermediate Algorithm Scripting: Make a Person

var Person = function(firstAndLast) {
  var firstName, lastName;

  function updateName(str) {
    firstName = str.split(" ")[0];
    lastName = str.split(" ")[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + " " + lastName;
  };

  this.setFirstName = function(str) {
    firstName = str;
  };

  this.setLastName = function(str) {
    lastName = str;
  };

  this.setFullName = function(str) {
    updateName(str);
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

/// Intermediate Algorithm Scripting: Map the Debris


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(
        TAU * Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3) / GM)
      )
    };
  });
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);



/// done