var caminte = require('caminte'),
    Schema = caminte.Schema,
    config = {
         driver     : "sqlite3",
         database   : "my.db"
    };

var schema = new Schema(config.driver, config);

var Test = schema.define('Test', {
  title: {type: schema.String, limit: 1000},
  date: {type: schema.Date, default: Date.now}
});

exports.get = function (request, h) {
  const Url = request.url;
  return {pathname:'GET Handled pathname: '+Url.pathname,
          query: Url.query,
          //hello: db.get('hello')
         };
};
