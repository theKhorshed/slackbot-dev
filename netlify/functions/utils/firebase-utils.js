const { initializeApp } = require("firebase/app");

const {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
} = require("firebase/firestore");

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
const usersCollection = collection(db, "users");

async function addUser(data) {
  try {
    await setDoc(doc(collection(db, "users"), data.user_id), data);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
}

async function updateSignInStatus(user, area, status) {
  try {
    await updateDoc(doc(db, "users", user), {
      [`signin_status.${area}`]: status,
    });
  } catch (e) {
    console.error("Error updating user sign-in status: ", e);
  }
}

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

// export utils/refs
// export { db, usersCollection, addUser, updateSignInStatus, showReport };
exports.db = db;
exports.usersCollection = usersCollection;
exports.addUser = addUser;
exports.updateSignInStatus = updateSignInStatus;
exports.showReport = showReport;
