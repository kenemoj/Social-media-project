import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);

    const login = () =>{
        
        setCurrentUser({
            id:1, 
            name:"Peter Parker", 
            profilePic:"https://i.pinimg.com/736x/95/00/4b/95004bdce7df298d67e11652b20ff99a.jpg"})
    }

    useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser)); }, [currentUser])

    
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )

};