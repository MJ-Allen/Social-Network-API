const { connect, connection } = require('mongoose');


connect('mongodb://localhost/social-network-api', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    // unifiedtopology : DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.

    // usenewurlparser : DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
});

module.exports = connection;