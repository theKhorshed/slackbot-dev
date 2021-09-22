import { table } from "table";
import { showReport } from "../../modules/firebase-utils.js";
const config = {
  columns: [
    { alignment: "left" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
    { alignment: "center" },
  ],
  border: {
    topBody: `─`,
    topJoin: `┬`,
    topLeft: `┌`,
    topRight: `┐`,

    bottomBody: `─`,
    bottomJoin: `┴`,
    bottomLeft: `└`,
    bottomRight: `┘`,

    bodyLeft: `│`,
    bodyRight: `│`,
    bodyJoin: `│`,

    joinBody: `─`,
    joinLeft: `├`,
    joinRight: `┤`,
    joinJoin: `┼`,
  },
};

exports.handler = async function (event, context) {
  const data = await showReport();
  data = table(data, config);

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
