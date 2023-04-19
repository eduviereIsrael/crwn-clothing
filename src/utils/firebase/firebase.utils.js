import {initializeApp} from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
  } from "firebase/firestore";


// Your web app's Firebase configuration that makes it possible to link with all the other firebase applications and service without new configurations.
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object)
    })

    await batch.commit();

    console.log("done")
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    },{})

    return categoryMap;
  }

  //The below function creates a user document reference and with that it creates a snapshot which can be used to check if that user already exists in the database, and then proceed to create the user's documents if
  export const createUserDocumentFromAuth = async(userAuth, additionalInformation) => {
    if (!auth) return;

    // Creates a document reference using the user object returned from authentication
    const userDocRef = doc(db, 'users', userAuth.uid);

    // creates a snapshot from the reference document that can be checked against the collection in firebase
    const userSnapShot = await getDoc(userDocRef);

    // creates the user document from the reference if the snapshot doesn't exist in firebase
    if(!userSnapShot.exists()){

      const {displayName, email} = userAuth;

      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error){
        console.log("error creating the user", error)
      }
    }

    return userDocRef;

  }

  // returns an object that contains the user object passed to create user document and reference
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  //
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);

  // listens for changes in the user authentication and is fired when there is a sign in or sign out
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)