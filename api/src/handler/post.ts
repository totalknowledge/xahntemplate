exports.post = function (request, h) {
  const Url = request.url;
  return {pathname:'POST Handled pathname: '+Url.pathname,
          query: Url.query};
};
