import React from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import Header from './Header';
import {checkValidData} from '../Utils/Validate'
import {auth } from '../Utils/Firebase'
import { useDispatch } from 'react-redux';
import {addUser} from '../Utils/UserSlice'

const LogIn = () => {
  const [isSignUpPage,setIsSignUpPage] = React.useState(false);
  const [errorMessage,setErrorMessage] = React.useState(null)
  const email = React.useRef(null);
  const password = React.useRef(null);
  const name = React.useRef(null);
   
  const dispatch = useDispatch();


  const toggleSignUpForm = () => {
    setIsSignUpPage(!isSignUpPage)
  }

  const handleButtonClick = () => {
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);
       if(message) return;
       if(isSignUpPage) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          }).then(() => {
            const {uid, email,displayName}= auth.currentUser;
        dispatch(addUser({uid : uid,email : email,displayName: displayName}));
            
          }).catch((error) => {
            setErrorMessage(error.message)
          });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        
        });  
       }
       else
       {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
     
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
       }
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
       alt="logo"
      />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg flex flex-wrap'>
      <h1 className='font-bold text-3xl py-4'>{isSignUpPage? 'Sign Up' : 'Sign In'}</h1>
      {isSignUpPage && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-screen bg-gray-800'/>}
      <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-screen bg-gray-800'/>
      <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-screen bg-gray-800'/>
      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
      <button onClick={handleButtonClick} className='p-4 my-6 w-screen bg-red-700 rounded-lg'>{isSignUpPage? 'Sign Up' : 'Sign In'}</button>
      
      <p className='py-4 cursor-pointer' onClick={toggleSignUpForm}>
  {isSignUpPage ? 'Already Registered? Sign In Now' : 'New to Netflix? Sign Up Now'}
</p>

      
      
      </form>
    </div>
  )
}

export default LogIn
