const debug1 = require('./_module')('one')
const debug2 = require('./_module')('two')

debug1(`started firts debugger!`)
debug2(`started second debugger!`)

setTimeout(function () {
    debug1(`after some time...`);
    debug2(`what happen?!`);
}, 200)