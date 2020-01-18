//\\ Free Code Camp JavaScript Object Oriented Programming //\\


// +++++ ///  Create a Basic JavaScript Object

let dog = {
  name: "roxy",
  numLegs: 4,
  tail: true
};



// +++++ ///  Use Dot Notation to Access the Properties of an Object

let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name, dog.numLegs);



// +++++ ///  Create a Method on an Object

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has 4 legs.";
  }
};

dog.sayLegs();



// +++++ ///  Make Code More Reusable with the this Keyword

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};

dog.sayLegs();



// +++++ ///  Define a Constructor Function

function Dog() {
  this.name = "roxy";
  this.color = "black and brown";
  this.numLegs = 4;
}



// +++++ ///  Use a Constructor to Create Objects

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

let hound = new Dog();



// +++++ ///  Extend Constructors to Receive Arguments

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Fido", "orange and green");



// +++++ ///  Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);



// +++++ ///  Understand Own Properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps(obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);



// +++++ ///  Use Prototype Properties to Reduce Duplicate Code

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");



// +++++ ///  Iterate Over All Properties

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}


// +++++ ///  Understand the Constructor Property

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}



// +++++ ///  Change the Prototype to a New Object

function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  numLegs: 4,
  eat() {
    console.log("nom nom nom");
  },
  describe() {
    console.log("My name is " + this.name);
  }
};



// +++++ ///  Remember to Set the Constructor Property when Changing the Prototype

function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};



// +++++ ///  Understand Where an Object’s Prototype Comes From

function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);



// +++++ ///  Understand the Prototype Chain

function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);



// +++++ ///  Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};



// +++++ ///  Inherit Behaviors from a Supertype

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();



// +++++ ///  Set the Child's Prototype to an Instance of the Parent

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();



// +++++ ///  Reset an Inherited Constructor Property

function Animal() {}
function Bird() {}
function Dog() {}
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();




// +++++ ///  Add Methods After Inheritance

function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
let beagle = new Dog();

beagle.eat();
beagle.bark();




// +++++ ///   Override Inherited Methods

function Bird() {}

Bird.prototype.fly = function() {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line

Penguin.prototype.fly = () => "Alas, this is a flightless bird.";

// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());




// +++++ ///   Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
function glideMixin(obj) {
  obj.glide = () => "Gliding!";
}

glideMixin(bird);
glideMixin(boat);




// +++++ ///   Use Closure to Protect Properties Within an Object from Being Modified Externally

function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}




// +++++ ///  Understand the Immediately Invoked Function Expression (IIFE)   

(function() {
  console.log("A cozy nest is ready");
})();




// +++++ ///  Use an IIFE to Create a Module

const funModule = (function() {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();



//////////    end        ///////