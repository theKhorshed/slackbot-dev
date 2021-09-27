const uppercaseModule = require("./utils/uppercase.js");
const { db, showReport } = require("./utils/firebase-utils.js");
const { table } = require("table");

exports.handler = async function (event, context) {
  const data = await showReport();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: table(data),
    }),
  };
};
