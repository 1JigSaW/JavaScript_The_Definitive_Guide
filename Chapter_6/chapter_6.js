function sayHello() {
	console.log('Hello world');
	console.log('!Hola mundo!');
	console.log('Hallo wereld');
}

sayHello();

function getGreeting() {
	return "Hello world!";
}

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;
console.log(f());

const o = {};
o.f = getGreeting;
console.log(o.f());

const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr[1]());

function avg(a, b) {
	return (a + b)/2;
}
console.log(avg(5, 10))

const a = 5, b = 10;
console.log(avg(a, b));

function fuu(x) {
	console.log(`Inside f: x=${x}`);
	x = 5;
	console.log(`Inside f: x=${x} after assignment`);
}

let x = 3;
console.log(`Before the call f: x=${x}`);
fuu(x);
console.log(`After the call f: x=${x}`);

function fuuu(oo) {
	oo.message = `Changed to f (previous value:${oo.message})`;
}
let oo = {
	message: "Starting value"
};
console.log(`Before the call f: o.message=${oo.message}`);
fuuu(oo);
console.log(`After the call f: o.message=${oo.message}`);

// function fuuuu(ooo) {
// 	ooo.message = `Changed to f`;
// 	ooo = {
// 		message: 'New object!'
// 	};
// console.log(`Inside fuuu: ooo.mesage=${ooo.message}`);
// let ooo1 = {
// 	message: "Starting value"
// };
// console.log(`Before the call f: ooo.message=${ooo.message}`);
// fuuuu(ooo1);
// console.log(`After the call f: ooo.message=${ooo1.message}`);

function fq(x) {
	return `Inside f: x=${x}`;
}
console.log(fq());

function getSentences({ subject, verb, object }) {
	return `${subject} ${verb} ${object}`;
}

const op = {
	subject: "I",
	verb: "love",
	object: "Javascript",
};
console.log(getSentences(op));

const arrp = [ 'I', 'love', 'Javascript' ];
console.log(getSentences(arrp));

function addPrefix(prefix, ...words) {
	const prefixedWords = [];
	for(let i=0; i<words.length; i++) {
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}
console.log(addPrefix('con', 'verse', 'vex'));

function fff(a, b = 'default', c = 3) {
	return `${a} - ${b} - ${c}`;
}
console.log(fff(5, 6, 7));
console.log(fff(5, 6));
console.log(fff(5));
console.log(fff());

const opa = {
	name: 'Wallace',
	bark: function() { return 'Woof!'; },
}
const opa2 = {
	name: 'Wallace',
	bark() { return 'Woof!'; },
}

const opap = {
	name: 'Wallace',
	speak() { return `My name ${this.name}!`; },
}
console.log(opap.speak());

const speak = opap.speak;
speak === opap.speak;
speak();

const oooo = {
	name: 'Julie',
	greetBackwards: function() {
		const self = this;
		function getReverseName() {
			let nameBackwards = '';
			for(let i=self.name.length-1; i>=0; i--) {
				nameBackwards += self.name[i];
			}
			return nameBackwards;
		}
		return `${getReverseName()} si eman ym ,olleH`;
	},
};
console.log(oooo.greetBackwards());

// const g = function gg(stop) {
// 	if(stop) console.log('gg stop!!!!');
// 	gg(true);
// };
// g(false);

const f1 = function() { return "hello!"; }
const f12 = () => "hello!";
const f2 = function(name) { return `hello! ${name}`; }
const f22 = name => `hello! ${name}`;
const f3 = function(a, b) { return a + b }
const f32 = (a, b) => a + b;

const ooooo = {
	name: 'Julie',
	greetBackwards: function() {
		const self = this;
		getReverseName = () => {
			let nameBackwards = '';
			for(let i=self.name.length-1; i>=0; i--) {
				nameBackwards += self.name[i];
			}
			return nameBackwards;
		};
		return `${getReverseName()} si eman ym ,olleH`;
	},
};

const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greet() {
	return `Hello, my name is ${this.name}`
}
console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
	this.birthYear = birthYear;
	this.occupation = occupation;
}
console.log(update.call(bruce, 1949, 'singer'));
console.log(update.call(madeline, 1942, 'actress'));

console.log(update.apply(bruce, [1939, 'sdfsd']));
console.log(update.apply(madeline, [1942, 'actress']));

const arrrrr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arrrrr));
console.log(Math.max.apply(null, arrrrr));

const updateBruce = update.bind(bruce);

console.log(updateBruce(1904, 'actor'));
console.log(updateBruce.call(madeline, 1231, 'king'));