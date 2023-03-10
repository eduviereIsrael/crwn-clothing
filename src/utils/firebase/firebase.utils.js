import {initializeApp} from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
  } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBcEUSo--e6hk05puSw61yozjuQVTSvCY",
    authDomain: "crwn-clothing-db-70d50.firebaseapp.com",
    projectId: "crwn-clothing-db-70d50",
    storageBucket: "crwn-clothing-db-70d50.appspot.com",
    messagingSenderId: "178912397493",
    appId: "1:178912397493:web:f886559b772b564b21d6fc"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
      
      const {displayName, email} = userAuth;

      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error){
        console.log("error creating the user", error)
      }
    }

    return userDocRef;

  }
