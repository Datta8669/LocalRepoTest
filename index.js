// index.js
function sayHello(name = 'World') {
    console.log(`Hello, ${name}!`);
}

// If run directly: node index.js [name]
if (require.main === module) {
    const name = process.argv[2];
    sayHello(name);
}

module.exports = { sayHello };