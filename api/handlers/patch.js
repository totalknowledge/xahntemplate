exports.patch = function (request, h) {
  const Url = request.url;
  return {pathname:'PATCH Handled pathname: '+Url.pathname,
          query: Url.query};
};
