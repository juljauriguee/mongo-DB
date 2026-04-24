const fs = require('fs');

const fileName = 'message.txt';
const content = "Hello Node.js!";

fs.open(fileName, 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.log("File already exists. Skipping creation.");
    } else {
      console.error(err);
    }
    return;
  }

  fs.writeFile(fd, content, (err) => {
    if (err) {
      console.error("Write error:", err);
    } else {
      console.log("File created safely without overwriting.");
    }
  });
});