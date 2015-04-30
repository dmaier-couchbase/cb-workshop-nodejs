couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('workshop', 'test');

var UID = 'dmaier';
var KEY = 'user::' + uid;

bucket.get(KEY , function(err, res) {
	  
    if (err) {
	
      console.log('operation failed', err);
      return;
    }

    console.log('success!', res);
});