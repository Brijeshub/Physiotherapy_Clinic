import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; //  Storage import

const firebaseConfig = {
  apiKey: "AIzaSyBuPWkcXEhuzqVLT9K2Q1-qX_zyHQJxzCs",
  authDomain: "clinic-c8e09.firebaseapp.com",
  projectId: "clinic-c8e09",
  storageBucket: "clinic-c8e09.firebasestorage.app",
  messagingSenderId: "501370147120",
  appId: "1:501370147120:web:f7efd4ffaa53008f1138f5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app); //  Initialize Storage

// check firebase online...............
// enableNetwork(db)
//   .then(() => console.log("Firestore is online"))
//   .catch((error) => console.error("Failed to enable Firestore network", error));

  // export{db}

  export { storage }; // Export storage
