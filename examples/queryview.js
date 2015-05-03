couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('workshop', 'test');

var ViewQuery = couchbase.ViewQuery;

//var query = ViewQuery.from('users', 'by_birthday').stale(ViewQuery.Update.BEFORE).reduce(false);
var query = ViewQuery.from('users', 'by_birthday').stale(ViewQuery.Update.BEFORE).group_level(1);

bucket.query(query, function(err, results) {
   
    for (i in results)
        console.log(results[i]);
});
