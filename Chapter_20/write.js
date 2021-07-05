const fs = require('fs');
const path = require('path');
try {
fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'Hello from Node');
} catch(err) {
	console.log('Error');
}