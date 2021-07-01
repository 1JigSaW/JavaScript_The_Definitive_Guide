const arr1 = [1, 2, 3];
const arr2 = ['one', 2, 'three'];
const arr3 = [[1, 2, 3], ['one', 2, 'three']];

const arr4 = [
	{
		name: 'Fred', type: 'object', luckyNumbers: [5, 7, 13]
	},
	[
		{ name: 'Susan', type: 'object' },
		{ name: 'Anthony', type: 'object' },
	],
	1,
	function() { return 'an array element can also contain a function'; },
	'three',
];

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

arr1[4] = 5;
console.log(arr1);
console.log(arr1.length);

console.log(arr2[10]);
console.log(arr2.length);

const arr = ['b', 'c', 'd'];
console.log(arr.push('e'));
console.log(arr.pop());
console.log(arr.unshift('a'));
console.log(arr.shift());

arr.concat(4, 5, 6);
console.log(arr);
arr.concat([4, 5, 6]);
console.log(arr);
arr.concat([4, 5], 6);
console.log(arr);
arr.concat(4, [5, 6]);
console.log(arr);

const arrr2 = [1, 2, 3, 4, 5];
console.log(arrr2.slice(3));
console.log(arrr2.slice(2, 4));
console.log(arrr2.slice(-2));
console.log(arrr2.slice(1, -2));
console.log(arrr2.slice(-2, -1));

const arrr3 = [1, 5, 7];
console.log(arrr3.splice(1, 0, 2, 3, 4));
console.log(arrr3.splice(5, 0, 6));
console.log(arrr3.splice(1, 2));
console.log(arrr3.splice(2, 1, 'a', 'b'));

const arrr4 = [1, 2, 3, 4];
console.log(arrr4.copyWithin(1, 2));
console.log(arrr4.copyWithin(2, 0, 2));
console.log(arrr4.copyWithin(0, -3, -1));

const arrN1 = new Array(5).fill(1);
console.log(arrN1);
arrN1.fill('a');
console.log(arrN1);
arrN1.fill('b', 1);
console.log(arrN1);
arrN1.fill('c', 2, 4);
console.log(arrN1);
arrN1.fill(5.5, -4);
console.log(arrN1);
arrN1.fill(0, -3, -1);
console.log(arrN1);

const arrN2 = [1, 2, 3, 4, 2];
console.log(arrN2.reverse());
console.log(arrN2.sort());

const arrN3 = [{ name: 'Suzanne'}, { name: 'Jim'},
	{ name: 'Trevor' }, { name: 'Amanda' }
];
console.log(arrN3.sort());
console.log(arrN3.sort((a, b) => a.name > b.name));

const arrN5 = { name: 'Jerry' };
const arrN6 = [1, 5, 'a', 0, true, 5, [1, 2], '9'];
console.log(arrN6.indexOf(5));
console.log(arrN6.lastIndexOf(5));
console.log(arrN6.indexOf('a'));
console.log(arrN6.lastIndexOf('a'));
console.log(arrN6.indexOf({ name: 'Jerry' }));
console.log(arrN6.indexOf(0));
console.log(arrN6.indexOf([1, 2]));
console.log(arrN6.indexOf('9'));
console.log(arrN6.indexOf('a', 5));
console.log(arrN6.indexOf(5, 5));
console.log(arrN6.lastIndexOf(5, 4));
console.log(arrN6.lastIndexOf(true, 3));

const arrN7 = [{ id: 5, name: "Judith"}, { id: 7, name: 'Frncis'}];
console.log(arrN7.findIndex(o => o.id === 5));
console.log(arrN7.findIndex(o => o.name === 'Frncis'));
console.log(arrN7.findIndex(o => o === 3));
console.log(arrN7.findIndex(o => o.id === 17));

console.log(arrN7.find(o => o.id === 5));
console.log(arrN7.find(o => o.id === 2));

const arrN8 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arrN8.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));

class Person {
	constructor(name) {
		this.name = name;
		this.id = Person.nextId++;
	}
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
	juliet = new Person('Juliet'),
	peter = new Person('Peter'),
	jay = new Person('Jay');
const arrN9 = [jamie, juliet, peter, jay];

console.log(arrN9.find(p => p.id === juliet.id));
console.log(arrN9.find(p => p.id === this.id, juliet));

const arrN10 = [5, 7, 12, 15, 17];
console.log(arrN10.some(x => x%2===0));
console.log(arrN10.some(x => Number.isInteger(Math.sqrt(x))));

console.log(arrN10.every(x => x%2===0));
console.log(arrN10.every(x => Number.isInteger(Math.sqrt(x))));

const cart = [ { name: 'Widget', price: 9.95 }, { name: 'Gadget', price: 22.95 }];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8);
// const lcNames = names.map(String.toLowerCase);
console.log(names);
console.log(prices);
console.log(discountPrices);

// const cart2 = items.map((x, i) => ({ name: x, price: prices[i]}));

const cards = [];
for(let suit of ['H', 'C', 'D', 'S'])
	for(let value=1; value<=13; value++)
		cards.push({ suit, value });

console.log(cards.filter(c => c.value === 2));
console.log(cards.filter(c => c.suit === 'D'));
console.log(cards.filter(c => c.value > 10));
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));

function cardToString(c) {
	const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
	const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
	for(let i=2; i<=10; i++) values[i] = i;
	return values[c.value] + suits[c.suit];
}
console.log(cards.filter(c => c.value === 2).map(cardToString));
console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));

const arrN11 = [5, 7, 2, 4];
const sum = arrN11.reduce((a, x) => a += x, 0);
console.log(sum);

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
	a.N++;
	let delta = x - a.mean;
	a.mean += delta/a.N;
	a.M2 += delta*(x - a.mean);
	return a;
}, { N:0, mean:0, M2:0 });
if(stats.N > 2) {
	stats.variance = stats.M2 / (stats.N - 1);
	stats.stdev = Math.sqrt(stats.variance);
}

const arrN12 = [1, null, 'hello', 'world', true, undefined];
delete arrN12[3];
arrN12.join();
arrN12.join('');
arrN12.join(' -- ');