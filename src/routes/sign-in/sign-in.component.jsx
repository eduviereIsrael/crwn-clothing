import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async() => {
    console.log('working')
    const {user} = await signInWithGooglePopup();
    // // console.log(response);
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(user)
  }

  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
          Sign in with google
        </button>
    </div>
  )
}

export default SignIn