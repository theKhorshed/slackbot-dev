import { table } from "table";
import {
  addUser,
  updateSignInStatus,
  showReport,
} from "./modules/firebase-utils.js";
const data = {
  name: "Lisa",
  slack_handle: "lisa",
  signin_status: {
    ch: "red",
    "fb-onboarding": "red",
    "fb-ads": "red",
    "fb-groups": "red",
    recallers: "red",
    h360: "red",
    an: "red",
    hstd: "red",
    "wag-nation": "red",
    icp: "red",
  },
};

// addUser(data);
// updateSignInStatus("khorshed.ninja", "ch", "updated");

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

async function test() {
  const data = await showReport();
  console.log(table(data, config));
}
test();
// showReport()
//   .then((data) => {
//     console.log(table(data, config));
//   })
//   .catch((err) => console.error(err));
