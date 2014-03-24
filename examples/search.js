var rmp = require('../');

rmp.search("teacher","scobey")
.then(function(results) {
    console.log(results);
});