import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmp5EFBL1vh7R5r4hPRiisL3mqRZJauYE",
  authDomain: "restaurantapp-6e011.firebaseapp.com",
  databaseURL: "https://restaurantapp-6e011-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-6e011",
  storageBucket: "restaurantapp-6e011.appspot.com",
  messagingSenderId: "1068493451977",
  appId: "1:1068493451977:web:e807c548e1272006a9d318",
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
