const fs = require('fs');

const content = "Hello, this file was created using Node.js!";

fs.writeFile('message.txt', content, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File has been created successfully!");
});