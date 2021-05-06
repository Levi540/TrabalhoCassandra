const cassandra = require('cassandra-driver');

var client = new cassandra.Client({
    contactPoints: ['localhost'], 
    localDataCenter: 'datacenter1',  
    credentials: {
        username: 'cassandra', 
        password: 'cassandra'
    },
    encoding: { useUndefinedAsUnset: true },
    keyspace: 'cassandra', 
    port: 9042
});
client.connect(function(err, result) {
    console.log('cassandra connected');
});

module.exports = client;