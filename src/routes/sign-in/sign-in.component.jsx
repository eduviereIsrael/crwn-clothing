import {useEffect} from 'react';
import { getRedirectResult } from "firebase/auth"
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { 
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async() => {
    // console.log('working')
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  //the below use efect function executes 'sign in with redirect logic'
  // useEffect(() => {
  //   async function getResultFromRedirect (){
  //     const response =  await getRedirectResult(auth);
  //     // console.log(response);
  //     if (response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   getResultFromRedirect()
    
  // },[])


  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
          Sign in with Google Pop up
        </button>
        <SignUpForm />
        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with google redirect
        </button> */}
    </div>
  )
}

export default SignIn