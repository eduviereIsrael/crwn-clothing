import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form copy/sign-in-form.component';
import {AuthContainer} from "./authentication.styles.jsx";

const Authentication = () => {

 

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
    <AuthContainer>
        <SignInForm />
        <SignUpForm />
        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with google redirect
        </button> */}
    </AuthContainer>
  )
}

export default Authentication