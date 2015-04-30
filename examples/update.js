couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('workshop', 'test');

var UID = 'dmaier';
var USER_KEY = 'user::' + UID;

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
        
        if ( typeof comp.users !== undefined )
        {
            comp.users.push(USER_KEY);
        }
        else
        {
            comp.users = [ USER_KEY ];   
        }
        
        bucket.replace(COMP_KEY , comp , function(err, res) {
	  
            if (err) {
	           console.log('Could not update the company', err);
            }
            else
            {
                console.log('Successfully updated the company', res);
            }
        });
    }
});