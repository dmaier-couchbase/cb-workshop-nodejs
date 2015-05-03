couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('workshop', 'test');

var ViewQuery = couchbase.ViewQuery;
var query = ViewQuery.from('users', 'by_birthday');

bucket.query(query, function(err, results) {
   
    for (i in results)
        console.log(results[i]);
});
