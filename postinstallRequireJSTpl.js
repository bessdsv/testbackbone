var fs = require('fs');
var someFile = 'client/libs/js/tpl.js';
fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/<%=/g, '<%[=_]');

  fs.writeFile(someFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
