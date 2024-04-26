import React from 'react';
import Header from './Header'

const LogIn = () => {
  const [isSignUpPage,setIsSignUpPage] = React.useState(false)
  const handleSignUp = () => {
    setIsSignUpPage(!isSignUpPage)
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
       alt="logo"
      />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4'>{isSignUpPage? 'Sign Up' : 'Sign In'}</h1>
      {isSignUpPage && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>}
      <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
      <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
      <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSignUpPage? 'Sign Up' : 'Sign In'}</button>
      
        <p className='py-4' onClick={handleSignUp}>
          {!isSignUpPage ? 'New to Netflix?' : 'Already Registered ?'} <span className='hover:underline cursor-pointer'>{!isSignUpPage ? 'Sign Up Now' : 'Sign In Now'}</span>
        </p>
      
      
      </form>
    </div>
  )
}

export default LogIn
