import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsfFxAySjxwaGCbqVvwjsnxCl1C4wKC6U",
  authDomain: "learning-9779d.firebaseapp.com",
  projectId: "learning-9779d",
  storageBucket: "learning-9779d.appspot.com",
  messagingSenderId: "512899739103",
  appId: "1:512899739103:web:13c05ce3267452b288e86a",
  measurementId: "G-Z6QVCK2ST8"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { auth};