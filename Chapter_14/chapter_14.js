console.log('Until timeout: ' + new Date());
function f() {
	console.log('After timeout: ' + new Date());
}
setTimeout(f, 60*100);
console.log('This happened after calling setTimeout!');
console.log('And that too!');

const start = new Date();
let i=0;
const intervalId = setInterval(function() {
	let now = new Date();
	if(now.getMinutes() !== start.getMinutes() || ++i>10)
		return clearInterval(intervalId);
	console.log(`${i}: ${now}`);
}, 5*100);

function countdown() {
	let i;
	console.log('Countdown:');
	for(i=5; i>=0; i--) {
		setTimeout(function() {
			console.log(i===0 ? "Start!" : i);
		}, (5-i)*100);
	}
}
countdown();

const fs = require('fs');
const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
	if(err) return console.error(`Error reading file ${fname}: ${err.message}`);
	console.log(`${`fname`} consist: ${data}`);
});

// const fs2 = require('fs');
// fs2.readFile('a.txt', function(err, dataA){
// 	if(err) console.error(err);
// 	fs2.readFile('b.txt', function(err, dataB){
// 		if(err) console.error(err);
// 		fs2.readFile('c.txt', function(err, dataC){
// 			if(err) console.error(err);
// 			setTimeout(function() {
// 				fs2.writeFile('d.txt', dataA+dataB+dataC, function(err) {
// 					if(err) console.error(err);
// 				});
// 			}, 60*100);
// 		});
// 	});
// });

// function countdown(seconds) {
// 	return new Promise(function(resolve, reject) {
// 		for(let i=seconds; i>=0; i--) {
// 			setTimeout(function() {
// 				if(i===13) return reject(new Error("Fundamentally it is not counting!"));
// 			}
// 		}
// 	});
// }
// const p = countdown(5);
// p.then(function() {
// 	console.log('Reverse report completed');
// });
// p.catch(function(err) {
// 	console.log("Countdown error: " + err.message);
// });

const EventEmitter = require('events').EventEmitter;
class Countdown extends EventEmitter {
	constructor(seconds, superstitious) {
		super();
		this.seconds = seconds;
		this.superstitious = !!superstitious;
	}
	go() {
		const countdown = this;
		const timeoutIds = [];
		return new Promise(function(resolve, reject) {
			for(let i =countdown.seconds; i>=0; i--) {
				timeoutIds.push(setTimeout(function() {
					if(countdown.superstitious && i===13)
						timeoutIds.forEach(clearTimeout);
						return reject(new Error('Fundamentally it is not counting!'));
					countdown.emit('tick', i);
					if(i===0) resolve();
				}, (countdown.seconds-i)*1000));
			}
		});
	}
}
const c2 = new Countdown(5);
c2.on('tick', function(i) {
	if(i>0) console.log(i + '...');
});
c2.go()
	.then(function() {
		console.log('Start!');
	})
	.catch(function(err) {
		console.error(err.message);
	})

function launch() {
	return new Promise(function(resolve, reject) {
		console.log('GO!');
		setTimeout(function() {
			resolve('Yaerrrr!!!');
		}, 2*1000);
	});
}
const c = new Countdown(5)
	.on('tick', i => console.log(i + '...'));
c.go()
	.then(launch)
	.then(function(msg) {
		console.log(msg);
	})
	.catch(function(err) {
		console.error('Huston, we hava problem....');
	})
console.log(launch());

function addTimeout(fn, timeout) {
	if(timeout === undefined) timeout = 1000;
	return function(...args) {
		return new Promise(function(resolve, reject) {
			const tid = setTimeout(reject, timeout,
				new Error('Commitment period expired'));
			fn(...args)
		})
	}
}

function nfcall(f, ...args) {
	return new Promise(function(resolve, reject) {
		f.call(null, ...args, function(err, ...args) {
			if(err) return reject(err);
			resolve(args.length<2 ? args[0] : args);
		});
	});
}

function ptimeout(delay) {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, delay);
	});
}

function grun(g) {
	const it = g();
	(function iterate(val) {
		const x = it.next(val);
		if(!x.done) {
			if(x.value instanceof Promise) {
				x.value.then(iterate).catch(err => it.throw(err));
			} else {
				setTimeout(iterate, 0, x.value);
			}
		}
	}) ();
}

function* theFutureIsNow() {
  let data;
  try {
    data = yield Promise.all([
      nfcall(fs.readFile, 'a.txt'),
      nfcall(fs.readFile, 'b.txt'),
      nfcall(fs.readFile, 'c.txt'),
    ]);
  } catch (err) {
    console.error('Unable to read one or more input files: ' + err.message);
    throw err;
  }
  yield ptimeout(60 * 1000);
  try {
    yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
  } catch (err) {
    console.error('Unable to write output file: ' + err.message);
    throw err;
  }
}