exports.put = function (request, h) {
  const Url = request.url;
  return {pathname:'PUT Handled pathname: '+Url.pathname,
          query: Url.query};
};
