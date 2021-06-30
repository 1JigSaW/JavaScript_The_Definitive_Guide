function f1() {
	console.log('one');
}
function f2() {
	console.log('two');
}

f2();
f1();
f2();

const x = 3;
function f() {
	console.log(x);
	console.log(y);
}

const y = 3;
f();

// let user = {
// 	name = 'Irena',
// 	age = 25,
// };

function greet(user) {
	console.log(`Hello, ${user.name}!`);
}
function getBirthYear() {
	return new Date().getFullYear() - user.age;
}

console.log('before block');
{
	console.log('inside block');
	const x2 = 3;
	console.log(x2);
}
// console.log(`Outside block; x=${x2}`);
{
	const x3 = 'blue';
	console.log(x3);
}
console.log(typeof x3);
{
	const x4 = 3;
	console.log(x4);
}
console.log(typeof x4);

{
	let x5 = 'blue';
	console.log(x5);
	{
		x5 = 4;
		console.log(x5);
	}
	console.log(x5);
}
console.log(typeof x5);

{
	let r = { color: 'blue' };
	let g = r;
	let b = 3;
	{
		let r = 5;
		console.log(r);
		console.log(g.color);
		g.color = 'red';
		console.log(b);
	}
	console.log(r.color);
	console.log(g.color);
	console.log(b);
}

let globalFunc;
{
	let blockVar = 'a';
	globalFunc = function() {
		console.log(blockVar);
	}
}
globalFunc();

let fg;
{
	let o = { note: 'Safely' };
	fg = function() {
		return o;
	}
}
let oRef = fg();
oRef.note = "Still not entirely safe!";

const message = (function() {
	const secret = 'Here is the password!';
	return `The password is ${secret.length} characters.`;
}) ();
console.log(message);

const fd = (function() {
	let count = 0;
	return function() {
		return `I've been called ${++count} times.`;
	}
}) ();
f();
f();

fs();
function fs() {
	console.log('fff');
}