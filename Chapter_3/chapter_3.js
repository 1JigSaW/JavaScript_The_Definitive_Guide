let currentTempC = 22;

currentTempC = 22.5;

let targetTempC;

let targetTempC, room1 = "conference_room_a", room2 = "lobby";

const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

let room1 = "conference_room_a";
let currentRoom = room1;
let currentRoom = conference_room_a;

let str = "hello";
str = "world";

let count = 10;
const blue = 0x0000ff;
const umask = 0o0022;
const roomTemp = 21.5;
const c = 3.0e6;
const e = -1.6e-19;

const inf = Infinity;
const ninf = -Infinity;
const nan = NaN;

const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const max = Number.MAX_VALUE;
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const nInf = Number.NEGATIVE_INFINITY;
const nan = Number.NaN;
const inf = Number.POSITIVE_INFINITY;

const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked im.';
const imperative = "Don't do that!";

// const dialog = "Sam looked up and said "don't do that!" to Max.";

const dialog1 = "He looked up and said \"don't do that\" to Max.";
const dialog1 = 'He looked up and said "don\'t do that" to Max.';

const s = "In JavaScript, use \\ as an escape character in strings.";

let currentTemp = 19.5;
const message = "The current temperature is " + currentTemp + "\u00b0C";

let currentTemp = 19.5;
const message = 'The current temperature is ${currentTemp}\u00b0C';

const multiline = "line1\
line2";

const multiline = "line1\n\
line2";

const multiline = `line1
line2`;

const multiline = `line1
line2
line3`;

const multiline = "line1\n" + 
"line2\n" + 
"line3";

const multiline = 'Current temperature:\n' + 
'\t${currentTemp}\u00b0C\n' + 
"Don`t worry...the heat is on!";

const result1 = 3 + '30';
const result2 = 3 * '30';

let heating = true;
let cooling = false;

const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE;

let currentTemp;
const targetTemp = null;
currentTemp = 19.5;
currentTemp = undefined;

const obj = {};
obj.size;
obj.color = 'yellow';
obj['not an identifier'] = 3;
obj['not an identifier'];
obj['color'] 

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];

const sam1 = {
    name:'Sam',
    age: 4,
};
const sam2 = { name: 'Sam', age: 4 };
const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

sam3.classification.family;
sam3["classification"].family;
sam3.classification["family"];
sam3["classification"]["family"];

sam3.speak = function() { return "Meow!"; };

sam3.speak();

delete sam3.classification;
delete sam3.speak;

const s = "hello";
s.toUpperCase();

const s = "hello";
s.rating = 3;
s.rating;

const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
	"What the hammer? What the chain?",
	"In what furnace was the brain",
	"What the anvil? What dread grasp",
	"Dare its deadly terrors clasp?",
];
const a4 = [
	{ name: "Ruby", hardness: 9 },
	{ name: "Diamond", hardness: 10 },
	{ name: "Topaz", hardness: 8 },
];
const a5 = [
	[1, 3, 5],
	[2, 4, 6],
];

const arr = ['a', 'b', 'c'];
arr.length;

arr[0];

arr[arr.length - 1];

const arr = [1, 2, 'c', 4, 5];
arr[2] = 3;

const arr = [
	"One",
	"Two",
	"Three",
];
const o = {
	one: 1,
	two: 2,
	three: 3,
};

const now = new Date();
now;

const halloween = new Date(2016, 9, 31);

const halloweenParty = new Date(2016, 9, 31, 19, 0);

halloweenParty.getFullYear();
halloweenParty.getMonth();
halloweenParty.getDate();
halloweenParty.getDay();
halloweenParty.getHours();
halloweenParty.getMinutes();
halloweenParty.getSeconds();
halloweenParty.getMilliseconds();

const email = /\b[a-z]0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\s{3}[\s-]?\d{4}/;

const numStr = "33.3";
const num = Number(numStr);

const a = parseInt("16 volts", 10);
const b = parseInt("3a", 16);
const c = parseFloat("15.5 kph");
const d = new Date();
const ts = d.valueOf();
const b = true;
const n = b ? 1 : 0;

const n = 33.3;
n;
const s = n.toString();
s;

const arr = [1, true, "hello"];
arr.toString();

const n = 0;
const b1 = !!n;
const b2 = Boolean(n);