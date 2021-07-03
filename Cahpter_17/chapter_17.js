const input = 'As I eas going to Saint Ives';
console.log(input.startsWith('As'));
console.log(input.endsWith('Ives'));
console.log(input.startsWith('going', 9));
console.log(input.endsWith('going', 14));
console.log(input.includes('going'));
console.log(input.includes('going', 10));
console.log(input.indexOf('going'));
console.log(input.indexOf('going', 10));
console.log(input.indexOf('nope'));

const output = input.replace('going', 'walking');
console.log(output);

const re1 = /going/;
const re2 = new RegExp('going');

const re = /\w{3,}/ig;

console.log(input.match(re));
console.log(input.search(re));
console.log(re.test(input));
console.log(re.exec(input));

const output2 = input.replace(/\w{4,}/ig, '****');
console.log(output2);

const html = 'HTML with <а href="/one">one link</a>, and some JavaScript.' +
	'<script src="stuff.js"></script>';
const matches = html.match(/area|a|link|script|source/ig);
console.log(matches);

const html2 = '<br>[!CDATA[[<br>]]';
const matches2 = html2.match(/<br>/ig);
console.log(matches2);

const beer99 = '99 bottles of beer on the wall ' +
	'take 1 down and pass it around -- ' +
	'98 bottles of bear on the wall.';
const matches3 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches3);

const m1 = beer99.match(/[1234567890]/g);
const m2 = beer99.match(/[0-9]/g);

const match3 = beer99.match(/[\-0-9a-z.]/ig);
console.log(match3);

const stuff = 
	'hight: 	9\n' +
	'medium: 	5\n' +
	'low: 		2\n';
const levels = stuff.match(/:\s*[0-9]/g);
console.log(levels);

const messyPhone = '(505) 555-1515';
const neatPhone = messyPhone.replace(/\D/g, '');
console.log(neatPhone);

const field = ' something ';
const valid = /\S/.test(field);
console.log(valid);

const input2 = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match5 = input2.match(/\d{5}.*/);
console.log(match5);

const text = 'Visit oreilly.com today!';
const match4 = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match4);

const html3 = ' <link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
'<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
'<linkrel="stylesheet" href="//anything.com/flexible.css">';
const matches6 = html3.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
console.log(matches6);

const input3 = "Regex pros know the difference between\n" +
"<i>greedy</i> and <i>lazy</i> matching.";
console.log(input3.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>'));

const promo = "Opening for УААХ is the dynamic GOOG! At the Ьох of fice now!";
const bands = promo.match(/(?:[A-Z])(?:[A-Z])\2\1/g);
console.log(bands);

let html4 = '<a class="nope" href="/yep">Yep</a>';
html5 = html4.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html5);

const html =
'<а class="foo" href="/foo" id="foo">Foo</a>\n' +
'<a href='/foo' Class="foo">Foo</a>\n' +
'<а href="/foo">Foo</a>\n ' +
'<а onclick= "javascript:alert('foo!')" href="/foo">Foo</a>';

function sanitizeATag(aTag) {
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
  const attributes = parts[1]
    .split(/\s+/);
  return (
    "<a " +
    attributes
      .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
      .join(" ") +
    ">" +
    parts[2] +
    "</a>"
  );
}

html.match(/<a .*?>(.*?)<\/a>/gi);

html.replace(/<a .*?>(.*?)<\/a>/gi, function(m, g1, offset) {
  console.log(`<a> tag found at ${offset}. contents: ${g1}`);
});

html.replace(/<a .*?<\/a>/gi, function(m) {
  return sanitizeATag(m);
});

html.replace(/<a .*?<\/a>/gi, sanitizeATag);

const inputs = [
  "john@doe.com", 
  "john@doe.com is my email", 
  "my email is john@doe.com", 
  "use john@doe.com, my email", 
  "my email:john@doe.com."
];

const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/gi;
inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>'));

function validPassword(p) {
  return (
    /[A-Z]/.test(p) && 
    /[a-z]/.test(p) && 
    /[0-9]/.test(p) && 
    !/[^a-zA-Z0-9]/.test(p)
  ); 
}

function validPassword(p) {
  return /[A-Z].*[0-9][a-z]/.test(p);
}

function validPassword(p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}