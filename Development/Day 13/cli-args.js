// process.argv contains: ['node', 'script.js', 'arg1', 'arg2', ...]
console.log('All arguments:', process.argv);

const args = process.argv.slice(2); // Remove first 2 elements
console.log('Your inputs:', args);

// Destructure
const [command, ...rest] = args;
console.log('Command:', command);
console.log('Rest:', rest);
