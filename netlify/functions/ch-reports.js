import { table } from "table";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcYZl2J2iZg_9zbikylnsxhcq95uE5QNQ",
  authDomain: "ch-signin.firebaseapp.com",
  projectId: "ch-signin",
  storageBucket: "ch-signin.appspot.com",
  messagingSenderId: "405862922673",
  appId: "1:405862922673:web:b36ec1695c520057e56590",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

const areaLabels = {
  ch: "CH",
  "fb-onboarding": "Facebook Onboarding",
  "fb-ads": "Facebook Ads",
  "fb-groups": "Facebook Groups",
  recallers: "Recallers",
  h360: "H360",
  an: "AN",
  hstd: "HSTD",
  "wag-nation": "Wag Nation",
  icp: "ICP",
};

function getStatusSymbolFromText(statusText) {
  switch (statusText) {
    case "red":
      return "○";
      break;
    case "orange":
      return "◔";
      break;
    default:
      return "●";
      break;
  }
}

async function showReport() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const tableData = [
    [
      "Name",
      "CH",
      "Fb Onboarding",
      "Fb Ads",
      "Fb Groups",
      "Recallers",
      "H360",
      "AN",
      "HSTD",
      "Wag Nation",
      "ICP",
    ],
  ];
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    let signinStatus = data.signin_status;
    tableData.push([
      data.name,
      getStatusSymbolFromText(signinStatus.ch),
      getStatusSymbolFromText(signinStatus["fb-onboarding"]),
      getStatusSymbolFromText(signinStatus["fb-ads"]),
      getStatusSymbolFromText(signinStatus["fb-groups"]),
      getStatusSymbolFromText(signinStatus.recallers),
      getStatusSymbolFromText(signinStatus.h360),
      getStatusSymbolFromText(signinStatus.an),
      getStatusSymbolFromText(signinStatus.hstd),
      getStatusSymbolFromText(signinStatus["wag-nation"]),
      getStatusSymbolFromText(signinStatus.icp),
    ]);
  });
  return tableData;
}

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
