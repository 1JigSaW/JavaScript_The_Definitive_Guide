const d = new Date();
console.log(d);
console.log(d.valueOf());

console.log(new Date(2021, 0));
console.log(new Date(2021, 1));
console.log(new Date(2021, 1, 14));
console.log(new Date(2021, 1, 14, 13));
console.log(new Date(2021, 1, 14, 13, 30));
console.log(new Date(2021, 1, 14, 13, 30, 5));
console.log(new Date(2021, 1, 14, 13, 30, 5, 500));
console.log(new Date(421412421454));
console.log(new Date('June 14, 1903'));

const moment = require('moment-timezone');
const d2 = new Date(Date.UTC(2021, 4, 27));
console.log(d2);

const d3 = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
console.log(d3);

const before = { d: new Date() };
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(typeof after.d);

const before2 = { d: new Date().value_of };
console.log(before2.d);
const json2 = JSON.stringify(before2);
const after2 = JSON.parse(json2);
console.log(after2.d);
const d4 = new Date(after2.d);

const d6 = new Date(Date.UTC(1930, 4, 10));
// console.log(d6..toLocaleDateString();
// console.log(d6.toLocaleFormat());
console.log(d6.toLocaleTimeString());
console.log(d6.toTimeString());
console.log(d6.toUTCString());

console.log(moment(d6).format('YYYY-MM-DD'));
console.log(moment(d6).format('YYYY-MM-DD HH:mm'));
console.log(moment(d6).format('YYYY-MM-DD HH:mm Z'));
console.log(moment(d6).format('YYYY-MM-DD HH:mm [UTC]Z'));

console.log((moment(d6).format('dddd, MMMM [the] Do, YYYY')));
console.log((moment(d6).format("h:mm a")));

const d7 = new Date(Date.UTC(1815, 9, 10));
console.log(d7.getFullYear());
console.log(d7.getMonth());
console.log(d7.getDate());
console.log(d7.getDay());
console.log(d7.getHours());
console.log(d7.getMinutes());
console.log(d7.getSeconds());
console.log(d7.getMilliseconds());
console.log(d7.getUTCFullYear());
console.log(d7.getUTCMonth());
console.log(d7.getUTCDate());

const d8 = new Date(1996, 2, 1);
const d9 = new Date(2009, 4, 27);

console.log(d8 > d9);
console.log(d8 < d9);

const myDiff = d9 - d8;
const daysDiff = myDiff/1000/60/60/24;

const dates = [];
const min = new Date(2021, 0, 1).valueOf();
const delta = new Date(2022, 0, 1).valueOf() - min;
for(let i=0; i<10; i++)
	dates.push(new Date(min + delta*Math.random()));
dates.sort((a, b) => b - a);
dates.sort((a, b) => a - b);
console.log(dates);

const m = moment();
m.add(3, 'days');
m.subtract(2, 'years');

// m = moment();
// m.startOf('year');
// m.endOf('month');

const m2 = moment()
	.add(10, 'hours')
	.subtract(3, 'days')
	.endOf('month');
console.log(m2);

console.log(moment().subtract(10, 'seconds').fromNow());
console.log(moment().subtract(5, 'hours').fromNow());