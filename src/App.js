import React from 'react';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

// import { DarkModeContext } from './context/darkModeContext';



import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet, 
} from "react-router-dom"
import NavBar from './components/navbar/navbar';
import LeftBar from './components/left bar/leftbar';
import RightBar from './components/right bar/rightbar';

import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App(){

    const currentUser =  useContext(AuthContext); // should be false when finished.

   
    const {darkMode} = useContext(DarkModeContext)


    console.log(darkMode)

    const Layout = ()=>{
        return(
            <div className= {`theme-${darkMode ? "dark" : "light"}`}> 
                <NavBar/>
                <div style={{display: "flex"}}>
                    <LeftBar/>
                    <div style={{flex:6}}>
                        <Outlet/>
                    </div>
                    <RightBar/>
                </div>
            </div>
        )
    }

   
    const ProtectedRoute = ({children}) => {
        if(!currentUser){
            return <Navigate to="/login"/>
        }

        return children;
    }
        

    const router = createBrowserRouter([
        {
            path:"/",
            element: (
                <ProtectedRoute> 
                    <Layout/>
                </ProtectedRoute>
            ),

            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                
                {
                    path: "/profile/:id",
                    element: <Profile/>
                },
            ]
        },
        
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        }
    ])

    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;