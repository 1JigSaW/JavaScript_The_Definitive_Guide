// const USER_EMAIL = Symbol();
// class User {
// 	set email(value) {
// 		if(!/@/.test(value)) throw new Error(`Bad Address: ${value}`);
// 		this[USER_EMAIL] = value;
// 	}
// 	get email() {
// 		return this[USER_EMAIL];
// 	}
// } 

// const u = new User();
// u.set email('john@doe.com');
// console.log(`User address: ${u.get email()}`);

// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	get perimetr() {
// 		return this.width*2 + this.height*2;
// 	}
// }

const obj = { foo: 'bar' };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
Object.defineProperty(obj, 'foo', {writable : false });
obj.foo = 3;

Object.defineProperty(obj, 'color', {
	get: function() { return this.color; },
	set: function(value) { this.color = value; },
})

Object.defineProperty(obj, 'name', {
	value: 'Cynthia',
});
Object.defineProperty(obj, 'greet', {
	value: function { return `Hello, my name is ${this.name}!`; }
});

const arr = [3, 1.5, 9, 2, 5.2];
arr.sum = function() { return this.reduce((a, x) => a+x); }
arr.avg = function() { return this.sum()/this.length; }
Object.defineProperty(arr, 'sum', { enumerate: false });
Object.defineProperty(arr, 'avg', { enumerate: false });