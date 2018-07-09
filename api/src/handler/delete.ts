exports.delete = function (request, h) {
  const Url = request.url;
  return {pathname:'DELETE Handled pathname: '+Url.pathname,
          query: Url.query};
};
