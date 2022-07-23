//adding two arrays
var furryAnimals = ["Alpaca", "Ring-tailed lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];

var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);

console.log(furryAndScalyAnimals);
//joining multiple arrays

var featheredAnimals = ["Macaw", "Dodo"];

var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);

console.log(allAnimals);

//finding the index of an element in an arrays
var index = allAnimals.indexOf("Macaw");
console.log(index);

//turning an index into a string
var toString = allAnimals.join();
console.log(toString);
//what if you do not want to use a dot as a separator
var separatorJoin = allAnimals.join(".");
console.log(separatorJoin);

//decision maker
console.log(Math.random()); //returns a random number between 0 and 1

//MathFloor
console.log(Math.floor(Math.random() * 10));

var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);

//complete decision maker
var phrases = [
  "That sounds good",
  "Yes, you should definitely do that",
  "I'm not sure that's a great idea",
  "Maybe not today?",
  "Computer says no.",
];

var milkShake = phrases[Math.floor(Math.random() * phrases.length)];
console.log("Should i have another milkshake? " + milkShake);

//Random insult generator
var randomBodyParts = ["Face", "Nose", "Hair", "Hand"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

console.log(
  [
    "Your",
    randomBodyPart,
    "is",
    "like",
    "a",
    randomAdjective,
    randomWord + "!!!",
  ].join(" ")
);

var array = [3, 2, 1];

var joining = [
  array[0],
  "is",
  "bigger",
  "than",
  array[1],
  "is",
  "bigger",
  "than",
  array[2],
].join(" ");
console.log(joining);

//objects
var cat = {
  legs: 4,
  name: "kitten",
  color: "black",
};
//accessing objects
console.log(cat["color"]);

//adding values to an empty object
var object = {};

object["type"] = "car";
object["fuel"] = "petrol";
object["color"] = "red";
object["wheels"] = 4;
object.model = "BMW";

console.log(object);

//useful things to do with objects
var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD",
  },
  "Star Wars: Episode VI - Return of the Jedi": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD",
  },
  "Harry Potter and the Goblet of fire": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Griot"],
    format: "Blu-ray",
  },
};

var cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blu-ray",
};

movies["Cars"] = cars;

console.log(Object.keys(movies));

//scorekeeper

var scores = {
  Fred: 0,
  Miriam: 0,
  Steve: 0,
  John: 0,
};

scores.Fred += 3;
scores.Fred += 2;
console.log(scores);

var myCrazyObject = {
  name: "A ridiculous object",
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
  "random animal": "Banana Shark",
};

console.log(myCrazyObject["some array"][2]["number"]);

var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
  console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
  console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
  console.log("OK, I'll have the pork.");
} else {
  console.log("Well, I guess I'll have rice then.");
}

var name = "Fred";

if ("Fred" === name) {
  console.log("Hello me!");
} else {
  console.log(" Hello stranger");
}

//while loop
var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("I have counted " + sheepCounted + " sheep!");
  sheepCounted++;
}

//for loops
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
  console.log("I have " + sheepCounted + " sheep!");
}

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
  console.log("hello");
}

//using for loops with arrays and strings
var animals = ["Lions", "Flamingo", "Polar Bear", "Boa Constrictor"];

for (var i = 0; i < animals.length; i++) {
  console.log("This zoo contains a " + animals[i] + ".");
}

//for loop in strings
var name = "Fred";
for (var i = 0; i < name.length; i++) {
  console.log("My name contains letter " + name[i]);
}
//print the powers of 2 using a for loop
for (var x = 2; x < 1000; x = x * 2) {
  console.log(x);
}

//functions
var draCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + "=^.^=");
  }
};
draCats(100);

//insult generator using functions
var randomFunctionWord = function (array) {
  return Math.floor(Math.random() * array.length);
};

var randomString =
  "Your " +
  randomFunctionWord(randomBodyPart) +
  " is like a " +
  randomFunctionWord(randomAdjective) +
  " " +
  randomFunctionWord(randomWord);

console.log(randomString);
//return value
var fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }
  return "The fifth letter of you name is " + name[4] + ".";
};
console.log(fifthLetter("jam"));

//using return multiple times instead of if..else statements
var medalForScore = function (score) {
  if (score < 3) {
    return "Bronze";
  }
  if (score < 7) {
    return "Silver";
  }
  return "Gold";
};

console.log(medalForScore(356));
