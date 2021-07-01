const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for(let prop in o) {
	if(!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}: ${o[prop]}`);
}

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const oo = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
Object.keys(oo).filter(prop => prop.match(/^x/)).forEach(prop => console.log(`${prop}: ${o[prop]}`))

const Car = (function() {
	const carProps = new WeakMap();
	class Car {

		constructor(make, model) {
			this.make = make;
			this.model = model;
			this._userGears = ['P', 'N', 'R', 'D'];
			this._userGear = this._userGears[0];
		}
		get userGear() { return this._userGear }
		set userGear(value) {
			if(this._userGears.indexOf(value) < 0)
				throw new Error(`Erroneous transmission: ${value}`)
			this._userGear = value;
		}
		shift(gear) { this.userGear = gear}
		}
		return Car;
	})();

const car1 = new Car('Tesla', 'Model S');
const car2 = new Car('Mazda', '3i');
console.log(car1 instanceof Car);
console.log(car1 instanceof Array);
car1.shift('D');
car2.shift('R');

const car11 = new Car();
const car12 = new Car();
console.log(car11.shift === Car.prototype.shift);
car11.shift('D');
console.log(car11.userGear);

class Car2 {
	static getNextVin() {
		return Car2.nextVin++;
	}
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this.vin = Car2.getNextVin();
	}
	static areSimilar(car1, car2) {
		return car1.make===car2.make && car1.model===car2.model;
	}
	static areSame(car1, car2) {
		return car1.vin===car2.vin;
	}
}
Car2.nextVin = 0;

const car111 = new Car2('Tesla', 'S');
const car222 = new Car2('Mazda', '3');
const car333 = new Car2('Mazda', '3');

console.log(car111.vin);
console.log(car222.vin);
console.log(car333.vin);

console.log(Car2.areSimilar(car111, car222));
console.log(Car2.areSimilar(car222, car333));
console.log(Car2.areSame(car222, car333));
console.log(Car2.areSame(car222, car222));

class Vehicle {
	constructor() {
		this.passengers = [];
		console.log("The power tool is created");
	}
	addPassenger(p) {
		this.passengers.push(p);
	}
}

class Car3 extends Vehicle {
	constructor() {
		super();
		console.log('Car is created');
	}
	deployAirbags() {
		console.log('BAAAAM!');
	}
}

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Judy');
console.log(v.passengers);
const ccc = new Car3();
ccc.addPassenger('Alice');
ccc.addPassenger('Cameron');
console.log(ccc.passengers);
console.log(ccc.deployAirbags());

class Super {
	constructor() {
		this.name = 'Super';
		this.isSuper = true;
	}
}
Super.prototype.sneaky = 'Not reccomend';

class Sub extends Super {
	constructor() {
		super();
		this.name = 'Sub';
		this.isSub = true;
	}
}

const obj = new Sub();

for(let p in obj) {
	console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (inhirited)'));
}