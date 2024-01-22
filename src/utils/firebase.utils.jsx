import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API,
  authDomain: "hermetica-76788.firebaseapp.com",
  projectId: "hermetica-76788",
  storageBucket: "hermetica-76788.appspot.com",
  messagingSenderId: "894176567690",
  appId: "1:894176567690:web:88ef10afa7215e22ae6873",
  measurementId: "G-HVFRSGM9HS"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const eventsRef = collection(db, 'events');
export const galleryRef = collection(db, 'Gallery');
export const membersRef = collection(db, 'members');
export const ReviewsRef = collection(db, 'Reviews');
export const projectRef  = collection(db, 'Projects');

// export const PEdataRef = collection(db, 'pedata');
export default app;
