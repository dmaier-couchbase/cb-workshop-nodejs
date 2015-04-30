couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('workshop', 'test');


var user = {};
user.uid = 'dmaier';
user.first_name = 'David';
user.last_name = 'Maier';
user.address = 'Somewhere';
user.email = 'david.maier@couchbase.com';

bucket.insert('user::' + user.uid , user , function(err, res) {
	  
    if (err) {
	
      console.log('operation failed', err);
      return;
    }

    console.log('success!', res);
});

var comp = {};
comp.name = 'Couchbase';
comp.address = 'Somewhere';
comp.domain = 'couchbase.com';

bucket.insert('comp::' + comp.domain , comp , function(err, res) {
	  
    if (err) {
        
        console.log('operation failed', err);
        return;
    }

    console.log('success!', res);

});

