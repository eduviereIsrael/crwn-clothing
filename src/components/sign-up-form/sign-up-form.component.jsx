import {useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import "./sign-up-form.styles.scss";



const SignUpForm = () => {

  const defaultFormFeilds = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }  

  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const {displayName, email, password, confirmPassword} = formFeilds;
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
  
    if (password !== confirmPassword){
        alert("Passwords do not match");
        return;
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(
            email, 
            password
        );

        await createUserDocumentFromAuth(user, { displayName });
        resetFormFeilds();

    } catch(error){
        if(error.code ==="auth/email-already-in-use"){
            alert("Cannot create user, email already in use");
        } else{
        console.log('user creation encountered an error',error);
        }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
        <span>Signup with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Display Name" 
                required 
                type="text" 
                name="displayName" 
                onChange={handleFormChange} 
                value={displayName} 
            />
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
            <FormInput
                label="Confirm Password" 
                required 
                type="password" 
                name="confirmPassword" 
                onChange={handleFormChange} 
                value={confirmPassword} 
            />

            <Button  type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUpForm