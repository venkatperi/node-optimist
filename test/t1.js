var optimist = require('../');

var p = optimist(['-x', '1', 'abc']).promise;


p.then(function(argv){ console.log(argv); },
  function(err){ console.log(err); });

