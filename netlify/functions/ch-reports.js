const uppercaseModule = require("./utils/uppercase.js");
const { db, showReport } = require("./utils/firebase-utils.js");
const { table } = require("table");
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

  return {
    statusCode: 200,
    body: "```" + table(data, config) + "```",
  };
};
