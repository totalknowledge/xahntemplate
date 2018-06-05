exports.options = function (request, h) {
  const Url = request.url;
  return {pathname:'OPTIONS Handled pathname: '+Url.pathname,
          query: Url.query};
};
