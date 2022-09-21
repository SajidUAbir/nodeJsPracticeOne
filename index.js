const supervillains = require("supervillains");
supervillains.all;

var counter = 0;
var i = setInterval(function () {
  console.log(`Supervillain ${counter} Name : ${supervillains.random()}`);

  counter++;
  if (counter > 100) {
    clearInterval(i);
  }
}, 250);
