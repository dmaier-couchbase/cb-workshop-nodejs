couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('workshop', 'test');

var DOMAIN = 'couchbase.com';
var COMP_KEY = 'comp::' + DOMAIN;

bucket.get( COMP_KEY , function(err, res) {
	  
    if (err) {
      console.log('Could not get the company ' + COMP_KEY, err);
    }
    else
    {
        console.log('Successfully retrieved the company', res);
        
        var comp = res.value;
        
        bucket.getMulti(comp.users, function(err, res) {
	  
            if (err) {
	           console.log('One or more operations failed', err);
            }
            else
            {
                console.log('Successfully got the users', res);
            }
        });
    }
});