// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// function completer(line) {
//   var completions = '.help .error .exit .quit .q'.split(' ')
//   var hits = completions.filter(function(c) { return c.indexOf(line) == 0 })
//   // show all completions if none found
//   return [hits.length ? hits : completions, line]
// }

// rl.question("What do you think of node.js? ", function(answer) {
//   // TODO: Log the answer in a database
//   console.log("Thank you for your valuable feedback:", answer);
//    Date.now = function now() {
//     return new Date().getTime();
//     console.log(Date.now);
//   };
// }

//  rl.close();
// });
//  {
  Date.now = function now() {
    return new Date().getTime();
   
  };
   console.log(Date.now());


  
  
