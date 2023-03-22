import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form copy/sign-in-form.component';
import "./authentication.styles.scss";

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
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm />
        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with google redirect
        </button> */}
    </div>
  )
}

export default Authentication