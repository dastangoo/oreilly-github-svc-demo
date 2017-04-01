'use strict';


// This is just simple documentation or documentation coverage with Inch CI
// Comment
module.exports = function hackerCase(text) {
  var upperCase = false;

  return text.replace(/\w/g, function(char) {
    return char[(upperCase = !upperCase) ? 'toLocaleUpperCase' : 'toLocaleLowerCase']();
  });
};
