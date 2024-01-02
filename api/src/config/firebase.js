const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

const firebaseConfig = {
  apiKey: "AIzaSyD1YRVQVGnzqVM_1eTT8mwotl98538ISXw",
  authDomain: "reddit-api-a20a0.firebaseapp.com",
  projectId: "reddit-api-a20a0",
  storageBucket: "reddit-api-a20a0.appspot.com",
  messagingSenderId: "876304154017",
  appId: "1:876304154017:web:929b48a48b099e21bddfe0"
};


const initializedApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
});

module.exports = {
  firebaseConfig,
  initializedApp,
};
