/*
Quokka Commands

Cmd/Ctrl + K, T: Create New Quokka File
Cmd/Ctrl + K, Q: Restart Quokka on Current File
*/

// quokka sanity test
{
  // block scope to avoid confusing quokka when using multiple files with minimal project config
  const x = 10;
  x;
  console.log(`quokka sanity test: ${x}`);
}

// quokka import test from node_modules
{
  //lodash test
  const _ = require("lodash");
  const arr = [1, 2, 3, 4, 5];
  const sum = _.sum(arr);
  sum;
}
