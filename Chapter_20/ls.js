const fs = require('fs');

fs.readdir(__dirname, function(err, files) {
	if(err) return console.errir('Error');
	console.log(`File consist ${__dirname}:`);
	console.log(files.map(f => '\t' + f).join('\n'));
})