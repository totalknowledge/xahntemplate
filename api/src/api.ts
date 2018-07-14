export class Api {
  server: any;

  constructor(connection: any) {
    let Hapi = require('hapi');
    this.server = Hapi.server({port:4000});

    // Generic Error Routes
    this.server.route({
      path: '/{getApiCall*}',
      method: 'GET',
      handler: (request, h) => {
        return {message:'h'};
      }
    });

    // Users Collection Routes
    this.server.route({
      path: '/users/{id?}',
      method: 'GET',
      handler: require('./handler/UserHandler').get
    });
    this.server.route({
      path: '/users/{id?}',
      method: 'POST',
      handler: require('./handler/UserHandler').post
    });

    // Generic Routes to be moved up above etc.
    this.server.route({
      path: '/{getApiCall*}',
      method: 'POST',
      handler: require('./handler/post').post
    });

    this.server.route({
      path: '/{getApiCall*}',
      method: 'PUT',
      handler: require('./handler/put').put
    });
    this.server.route({
      path: '/{getApiCall*}',
      method: 'PATCH',
      handler: require('./handler/patch').patch
    });
    this.server.route({
      path: '/{getApiCall*}',
      method: 'DELETE',
      handler: require('./handler/delete').delete
    });
    this.server.route({
      path: '/{getApiCall*}',
      method: 'OPTIONS',
      handler: require('./handler/options').options
    });
    this.server.route({
      path: '/alive',
      method: 'GET',
      handler: function(request, h) {
        return {session:'alive'};
      }
    });
  }

  async start() {
    await this.server.start();
    console.log('Started listening on %s', this.server.info.uri);
  };
}
