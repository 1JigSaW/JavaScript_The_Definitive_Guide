// let x, y;
// y = x = 3 * 5;
// console.log(x);
// console.log(y);

const a = 5;
const b = 3 - -a;
console.log(b);

const s = "5";
const z = 3 + +s;
console.log(z);

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +x3*3;
const p4 = -x4*4;
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);

let xx = 3, yy;
xx += yy = 6*5/2;
console.log(xx);

const n = 5;
const ss = "5";
console.log(n === ss);
console.log(n !== ss);
console.log(n === Number(ss));
console.log(n !== Number(ss));
console.log(n == ss);
console.log(n != ss);
const aa = { name: "an object" };
const bb = { name: "an object" };
console.log(a === b);
console.log(a !== b);
console.log(a == b);
console.log(a != b);

console.log(3 > 5);
console.log(3 >= 5);
console.log(3 < 5);
console.log(3 <= 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 < 5);
console.log(5 <= 5);

let nn = 0;
while(true) {
    nn += 0.1;
    if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log('Stopped at ${n}');

const skipIt = true;
let xxx = 0;
const result = skipIt || xxx++;
console.log(result);

const doIt = false;
let x4 = 0;
const result2 = doIt && x4++;

const options = supliedOptions || { name: "Default" }

const doIt2 = false;
const result3 = doIt ? "Do it!": "Trust";

let x = 0, y = 10, z;
z = (x++, y++);

let l = 22;
l >> 1;
l >>> 1;
l = ~l;
l++;

v = v0 = 9.8;
const nums = [ 3, 5, 15, 7, 5 ];
let n, i = 0;
while((n = nums[i]) < 10, i++ < nums.length) {
    console.log(`Number less 10: ${n}.`);
}
console.log(`Finded number more 10: ${n}.`);
console.log(`${nums.length} all number`);

const obj = { b: 2, c: 3, d: 4};

({a, b, c} = obj);

const arr = [1, 2, 3];
let [x, y] = arr;

const arr2 = [1, 2, 3, 4, 5];
let [x33, y33, ...rest] = arr2;
x33;
y33;
rest;

const roomTempC = 21.5;
let currentTempC = 19.5;
const message = "Temperature on the street not equal gome temperature on " + `${currentTempC-roomTempC}\u00b0C`;
const fahrenheit = `Street temperature ${currentTempC * 9/5 + 32}\u00b0F`;

if (isPrime(n)) {
    label = 'prime';
} else {
    label = 'non-prime';
}

label = isPrime(n) ? 'prime' : 'non-prime';