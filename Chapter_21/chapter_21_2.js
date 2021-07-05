const appInfo = {
	company: 'White Knight Software, Inc.',
	version: '1.3.5',
	buildId: 'Oa995448-ead4-4a8b-b050-9c9083279ea2',
	copyright() {
		return `c ${new Date().getFullYear()}, ${this.company}`;
	},
};
console.log(Object.freeze(appInfo));
console.log(Object.isFrozen(appInfo));

class Logger {
	constructor(name) {
		this.name = name;
		this.log = [];
	}
	add(entry) {
		this.log.push({
			log: entry,
			timestamp: Date.now(),
		});
	}
}
const log = new Logger('Journal');
console.log(Object.seal(log));
console.log(Object.isSealed(log));

log.anme = 'Joutnal';
log.add('vjklsdvb')

const log2 = new Logger('Journal jdjdjd');
console.log(Object.preventExtensions(log2));
console.log(Object.isExtensible(log2));

const coefficients = {
	а: 1,
	Ь: 2,
	с: 5,
};

function evaluate(x, c) {
	return c.a + c.b * x + c.c * Math.pow(x, 2);
}

console.log(evaluate(5, coefficients));

const betterCoefficients = new Proxy(coefficients, {
	get(target, key) {
		return target[key] || 0;
	},
});

const cook = {
  name: "Walt",
  redPhosphorus: 100,
  water: 500, 
};
const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if(key === 'redPhosphorus') {
      if(target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else
        return console.log("危険すぎます！");
    
    target[key] = value;
  },
});

protectedCook.water = 550;
console.log(protectedCook.water); 
console.log(protectedCook.redPhosphorus); 
protectedCook.redPhosphorus = 150; 
console.log(protectedCook.redPhosphorus); 

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);