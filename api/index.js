const Hapi = require('hapi');

const server = Hapi.server({port:4000});

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

start();
