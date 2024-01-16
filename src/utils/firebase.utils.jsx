import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM5-dthDB7IJG8PQvk2k-OhF0_Etq4zu8",
  authDomain: "hermetica-76788.firebaseapp.com",
  projectId: "hermetica-76788",
  storageBucket: "hermetica-76788.appspot.com",
  messagingSenderId: "894176567690",
  appId: "1:894176567690:web:88ef10afa7215e22ae6873",
  measurementId: "G-HVFRSGM9HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const membersRef = collection(db, 'members');
// export const PEdataRef = collection(db, 'pedata');
export default app;
