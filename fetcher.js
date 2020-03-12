const request = require('request');

const arg = process.argv.slice(2);
const fs = require('fs');

request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  // downlowading a file
  fs.writeFile(arg[1], body, () => {
    console.log('Downloaded and saved 3261 bytes to ./index.html');
  })
});