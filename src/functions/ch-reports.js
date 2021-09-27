import { showReport } from "./modules/firebase-utils.js";

exports.handler = async function (event, context) {
  const data = await showReport();
  //   data = table(data, config);

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
