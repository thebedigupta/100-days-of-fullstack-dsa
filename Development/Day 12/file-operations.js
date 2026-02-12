// Below I try to read a file

const fs = require('fs').promises;

async function readFile(filepath) {
  try {
    const readedData = await fs.readFile(filepath, 'utf8');
    console.log('File Content \n', readedData);
    return readedData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File Not Found :', filepath);
    } else {
      console.error('Read Error :', error.message);
    }
    return null;
  }
}

readFile('read.txt');

// Below I try to write a file

async function writeToFile(filepath, content) {
  try {
    await fs.writeFile(filepath, content, 'utf8');
    console.log(`Written to ${filepath}`);
  } catch (error) {
    console.error('Write error', error.message);
  }
}

writeToFile(
  'write.txt',
  'Hello I am trying to write this file hope it was done gracefully \n Date: ' +
    new Date(),
);

// Below I try to append a file content without earsing existing one

async function appendToFile(filepath, content) {
  try {
    await fs.appendFile(filepath, '\n' + content, 'utf8');
    console.log(`Appending in this file :`, filepath);
  } catch (error) {
    console.error(`Error Message :`, error.message);
  }
}


appendToFile('write(2).txt', 'Appending Sucessful');

