export class Api {
  //connection: any;
  server: any;

  constructor(connection: any) {
    let Hapi = require('hapi');
    this.server = Hapi.server({port:4000});
    //this.server.connection = connection;

    this.server.route({
      path: '/{getApiCall*}',
      method: 'GET',
      handler: (request, h) => {
        return {message:'h'};
      }
    });
    this.server.route({
      path: '/users/{id?}',
      method: 'GET',
      handler: require('./handler/UserHandler').get
    });
    this.server.route({
      path: '/{getApiCall*}',
      method: 'POST',
      handler: require('./handler/post').post
    });
    this.server.route({
      path: '/users',
      method: 'POST',
      handler: require('./handler/UserHandler').post
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
