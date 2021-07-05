let lastMessage;

module.exports = function (prefix) {
    return function (msg) {
        const now = Date.now();
        const sinceLastMessage = now - (lastMessage || now);
        console.log(`${prefix} ${msg} +${sinceLastMessage}ms`);
        lastMessage = now;
    }
}