import { table } from "table";
import { showReport } from "../../modules/firebase-utils.js";

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
