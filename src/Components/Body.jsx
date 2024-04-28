import React from 'react'
import LogIn from './LogIn';
import Browse from './Browse'
import { createBrowserRouter,RouterProvider,Route,Routes } from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../Utils/UserSlice';
 

const Body = () => {

  const dispatch = useDispatch();
 

  const appRouter = createBrowserRouter([
    {
       path:'/',
       element: <LogIn/>
    },
    {
      path:'/browse',
      element: <Browse/>
    }
  ]);

  React.useEffect(()=> {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {  
        const {uid, email,displayName}= user;
        dispatch(addUser({uid : uid,email : email,displayName: displayName}));
        
        
      } else {
       dispatch(removeUser())  
       
      }
    });
  })
  return (
    <div>
     <RouterProvider router={appRouter}/>

      {/*We can use Route wrapped insides Routes here but createBrowserRouter make the thing clear and easy to read */}
    </div>
  )
}

export default Body
