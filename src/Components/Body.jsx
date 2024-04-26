import React from 'react'
import LogIn from './LogIn';
import Browse from './Browse'
import { createBrowserRouter,RouterProvider,Route,Routes } from 'react-router-dom';
 

const Body = () => {

  const appRouter = createBrowserRouter([
    {
       path:'/',
       element: <LogIn/>
    },
    {
      path:'/browse',
      element: <Browse/>
    }
  ])
  return (
    <div>
     <RouterProvider router={appRouter}/>

      {/*We can use Route wrapped insides Routes here but createBrowserRouter make the thing clear and easy to read */}
    </div>
  )
}

export default Body
