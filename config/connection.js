const { connect, connection } = require('mongoose');

connect('mongodb://localhost/social-network-api', {
  // useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
