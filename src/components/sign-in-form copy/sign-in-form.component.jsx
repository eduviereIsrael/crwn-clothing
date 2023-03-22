import {useState} from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth ,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import "./sign-in-form.styles.scss";



const SignInForm = () => {


  const signInWithGoogle = async() => {
    // console.log('working')
    const {user} = await signInWithGooglePopup();
    // setCurrentUser(user);
  }

  const defaultFormFeilds = {
    email: "",
    password: "",
  }  


  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { email, password} = formFeilds;
//   console.log(formFeilds)

  const handleFormChange = (event) => {
    const {name, value} = event.target;
    setFormFeilds({...formFeilds, [name]: value});
  }

  const resetFormFeilds = () => {
    setFormFeilds(defaultFormFeilds);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
   

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
      // console.log(user);
      // setCurrentUser(user)
       
        resetFormFeilds();

    } catch(error){
       console.log("it didn't work", error);

       switch(error.code){

        case "auth/wrong-password":
          alert("Incorrect password for email")
          break

        case "auth/user-not-found":
          alert("No user associated with this email");
          break
        
          default:
            console.log(error);
      }
    

    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
           
            <FormInput
                label="Email" 
                required 
                type="email" 
                name="email" 
                onChange={handleFormChange} 
                value={email} 
            />
            <FormInput
                label="Password" 
                required 
                type="password" 
                name="password" 
                onChange={handleFormChange} 
                value={password} 
            />

            <div className='buttons-container'>
              <Button  type='submit'>Sign In</Button>
              <Button type="button" buttonType='google'  onClick={signInWithGoogle} >Google Sign In</Button>
            </div>

            
        </form>
    </div>
  )
}

export default SignInForm