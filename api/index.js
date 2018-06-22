const Hapi = require('hapi');
const server = Hapi.server({port:4000});

// var caminte = require('caminte'),
//     Schema = caminte.Schema,
//     config = {
//          driver     : "sqlite3",
//          database   : "my.db"
//     };
//
// var schema = new Schema(config.driver, config);

server.route({
  path: '/{getApiCall*}',
  method: 'GET',
  handler: require('./handlers/get').get
});

server.route({
  path: '/{getApiCall*}',
  method: 'POST',
  handler: require('./handlers/post').post
});

server.route({
  path: '/{getApiCall*}',
  method: 'PUT',
  handler: require('./handlers/put').put
});

server.route({
  path: '/{getApiCall*}',
  method: 'PATCH',
  handler: require('./handlers/patch').patch
});

server.route({
  path: '/{getApiCall*}',
  method: 'DELETE',
  handler: require('./handlers/delete').delete
});

server.route({
  path: '/{getApiCall*}',
  method: 'OPTIONS',
  handler: require('./handlers/options').options
});

server.route({
  path: '/alive',
  method: 'GET',
  handler: function(request, h) {
    return {session:'alive'};
  }
});

const start = async () => {
  await server.start();
  console.log('Started listening on %s', server.info.uri);
};

try {
  start();
}
catch (err) {
  console.log('closing');
  //db.on('close');
  //db.close();
}
