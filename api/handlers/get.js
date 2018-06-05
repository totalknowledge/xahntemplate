exports.get = function (request, h) {
  const Url = request.url;
  return {pathname:'GET Handled pathname: '+Url.pathname,
          query: Url.query};
};
