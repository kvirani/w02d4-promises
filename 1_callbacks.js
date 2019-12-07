const fs = require('fs');

let finalDoc = [];

const done = function (finalResults) {
  console.log('ALL DONE');
  console.log(finalResults.join('\n'));
}

fs.readFile("data/p1.txt", "utf8", (err, data) => {
  // runs a few ms after readFile returns
  if (err) {
    return console.log('FAILED ON FILE 1');
  }
  finalDoc.push(data);
  fs.readFile("data/p2.txt", "utf8", (err, data) => {
    if (err) { 
      return console.log('FAILED ON FILE 2');
    }
    finalDoc.push(data);
    fs.readFile("data/p3.txt", "utf8", (err, data) => {
      if (err) { 
        return console.log('FAILED ON FILE 3');
      }
      finalDoc.push(data);
      fs.readFile("data/p4.txt", "utf8", (err, data) => {
        if (err) { 
          return console.log('FAILED ON FILE 4');
        }
        finalDoc.push(data);
        done(finalDoc);
      });
    });
  });
});

