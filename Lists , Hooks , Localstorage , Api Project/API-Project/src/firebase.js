import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDLG786KmaQ8m0-M3pyUzYJp-A57ji_BFg",
  authDomain: "reactjs-crud-ps.firebaseapp.com",
  projectId: "reactjs-crud-ps",
  storageBucket: "reactjs-crud-ps.firebasestorage.app",
  messagingSenderId: "745572919897",
  appId: "1:745572919897:web:53ad860c89879444711f48",
  measurementId: "G-20LHFWDNGN"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
export {analytics};