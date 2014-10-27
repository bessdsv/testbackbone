var fs = require('fs');
var someFile = 'node_modules/connect-fs/lib/connect-fs.js';
fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\.session\.Store/g, '.Store');

  fs.writeFile(someFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});