const book = [
	"Twinkle, twinkle, little bat!",
	"How I wonder what you' reat!",
	"Up above the world you fly,",
	"Like а tea tray in the sky.",
	"Twinkle, twinkle, little bat!",
	"How I wonder what you' reat!",
];

const it = book.values();
console.log(it);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let current = it.next();
while(!current.done) {
	console.log(current.value);
	current = it.next();
}

const it1 = book.values();
const it2 = book.values();
console.log(it1.next());
console.log(it2.next());

class Log {
	constructor() {
		this.messages = [];
	}
	add(message) {
		this.messages.push({ message: message, timestamp: Date.now() });
	}
	[Symbol.iterator]() {
		return this.messages.values();
	}
}

const log = new Log();
log.add('First day');
log.add('Big fish');
log.add('Ship');

for(let entry of log) {
	console.log(`${entry.message} @ ${entry.timestamp}`);
}

class FibonacciSequence {
	[Symbol.iterator] () {
		let a = 0, b = 1;
		return {
			next() {
				let rval = { value:b, done: false };
				b += a;
				a = rval.value;
				return rval;
			}
		};
	}
}

function* rainbow() { 
	yield 'красный';
	yield 'оранжевый';
	yield 'желтый';
	yield 'зеленый';
	yield 'голубой';
	yield 'синий';
	yield 'фиолетовый';
}
const it3 = rainbow();
console.log(it3.next());

for(let color of rainbow()) {
	console.log(color);
}

function* interrogate() {
	const name = yield "What is your name?";
	const color = yield "What is your favourite color?";
	return `${name} favorite color ${color}`;
}

const it5 = interrogate();
console.log(it5.next());
console.log(it5.next('dqon'));
console.log(it5.next('ascas'));
