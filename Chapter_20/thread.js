const fs = require('fs');
const path = require('path');

const ws = fs.createWriteStream(path.join(__dirname, '/fs/', 'stream.txt'), {
    encoding: 'utf-8',
});
ws.write('line 1 \n');
ws.write('line 2 \n');
ws.end();

const rs = fs.createReadStream(path.join(__dirname, '/fs/', 'stream.txt'), {
    encoding: 'utf-8',
});
rs.on('data', function (data) {
    console.log('>> data: ' + data + data.repeat('\n', '\\n'));
});
rs.on('end', function (data) {
    console.log('>> end');
});