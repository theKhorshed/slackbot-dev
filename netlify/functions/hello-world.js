exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: {
      message: "Hello World!",
    },
  };
};
