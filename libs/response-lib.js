export const success = function(body) {
  return buildResponse(200, body);
};

export const failure = function(body) {
  return buildResponse(500, body);
};

const buildResponse = function(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
};