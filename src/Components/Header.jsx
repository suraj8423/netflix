import React from 'react'
import { signOut } from "firebase/auth";
import {auth } from '../Utils/Firebase'
import {onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,removeUser } from '../Utils/UserSlice';
import {LOGO,USER_AVATAR} from '../Utils/Constants'

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state => state.user))

const handleSignOut = () => {
signOut(auth).then(() => {
}).catch((error) => {
   
});
  }


  React.useEffect(()=> {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {  
        const {uid, email,displayName}= user;
        dispatch(addUser({uid : uid,email : email,displayName: displayName}));
        navigate('/browse')
      } else {
       dispatch(removeUser())  
        navigate('/')
      }
    });

    return () => unsubscribe();
  },[])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44" src={LOGO}
    alt="logo"
   />
  { user && <div className="flex p-2">
   <img className=" w-12 h-12" src={USER_AVATAR} alt="useIcon" />
   <button onClick={handleSignOut} className="font-bold text-white ">(Sign Out)</button>
   </div>}
    </div>
  )
}

export default Header
