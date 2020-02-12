const request = require('request');
const fs = require('fs');

const domain = process.argv.slice(2)[0];
let path = process.argv.slice(2)[1];
let filename = path.substring(2);
let downloaded = 0;


request(domain, (error, response, body) => {
  fs.writeFile(filename, body, 'utf8',() => {
    fs.stat(path, function(error, stats) {
      downloaded = stats.size;
      console.log(`Downloaded and saved ${downloaded} bytes to ${path}`);
    })
  });
});



