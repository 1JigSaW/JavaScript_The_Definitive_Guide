function printLeapYearStatus() {	
	const year = new Date().getFullYear();
	if(year % 4 !== 0) console.log(`${year} not leap.`)
	else if(year % 100 != 0) console.log(`${year} leap.`)
	else if(year % 400 != 0) console.log(`${year} not leap.`)
	else console.log(`${year} leap.`);
}

function isCurrentLeapYearLeapYear() {	
	const year = new Date().getFullYear();
	if(year % 4 !== 0) return false;
	else if(year % 100 != 0) return true;
	else if(year % 400 != 0) return false;
	else return true;
}

const daysInMonth = [31, isCurrentLeapYearLeapYear() ? 29: 28, 
	31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(isCurrentLeapYearLeapYear()) console.log('Now leap year');

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purpul'];
// let colorIndex = -1;
// function getNextRainbowColor() {
// 	if(++colorIndex >= colors.length) colorIndex = 0;
// 	return colors[colorIndex];
// }

console.log(getNextRainbowColor());

function isLeapYear(year) {	
	if(year % 4 !== 0) return false;
	else if(year % 100 != 0) return true;
	else if(year % 400 != 0) return false;
	else return true;
}

console.log(isLeapYear(1996));

const getNextRainbowColor = (function() {
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purpul'];
	let colorIndex = -1;
	return function() {
		if(++colorIndex >= colors.length) colorIndex = 0;
		return colors[colorIndex];
	};
}) ();

setInterval(function() {
	document.querySelector('.rainbow')
		.style['background-color'] = getNextRainbowColor();
}, 500);

function getRainbowIterator() {
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purpul'];
	let colorIndex = -1;
	return {
		next() {
			if(++colorIndex >= colors.length) colorIndex = 0;
			return {
				value: colors[colorIndex],
				done: false,
			};
		}
	};
}

const rainbowIterator = getRainbowIterator();
setInterval(function() {
	document.querySelector('.rainbow')
		.style['background-color'] = rainbowIterator().next().value;
}, 500);

setTimeout(function() { console.log('Hello!'); }, 1500);

var i;
for(i=5, i>=0, i--) {
	setTimeout(function() {
		console.log(i===0 ? "start!" : i);
	}, (5-i)*1000);
}

function loopBody(i) {
	setTimeout(function() {
		console.log(i===0 ? "start!" : i);
	}, (5-i)*1000);
}
var i;
for(i=5;i>0;i--) {
	loopBody(i);
}

function addThreeAddFiveSquareRoot(x) {
	return Math.sqrt(Math.pow(x+3, 2)+5);
}

const answer = (addThreeAddFiveSquareRoot(5)) + 
	addThreeAddFiveSquareRoot(2) / addThreeAddFiveSquareRoot(7);

const f = addThreeAddFiveSquareRoot;
const answer = (f(5) + f(2)) / f(7);

const Money = require('math-money');
const oneDollar = Money.Dollar(1);
const Dollar = Money.Dollar;
const twoDollars = Dollar(2);

const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI/4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
	function rotate(p) {
		return {
			х: р.х * cos(theta) - р.у * sin(theta),
			у: р.х * sin(theta) + р.у * cos(theta),
		};
	},
	function scale(p) {
		return { х: р.х * zoom, у: р.у * zoom };
	},
	function translate(p) {
		return { х: р.х + offset[0], у: р.у + offset[1]; };
	},

const р = { х: 1 , у: 1 };
let р2 = р;
for(let i=0;i<pipeline.length;i++) {
	р2 = pipeline[i](р2);
}

function sum(arr, f) {
	if(typeof f != 'function') f = x => x;
	return arr.reduce((a, x) => a += f(x), 0);
}

function sumOfSquares(arr) {
	return sum(arr, x => x*x);
}

function findNeedle(haystack) {
	if(haystack.length === 0) return 'not needle!';
	if(haystack.shift() === 'needle') return 'Found!';
	return findNeedle(haystack);
}