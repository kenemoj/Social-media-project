import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { AuthContext } from "../../context/authContext";


const NavBar  = () => {

    const {toggle, darkMode } = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>Buddies</span>
                </Link>
                <HomeOutlinedIcon/>
                {darkMode ? (<WbSunnyOutlinedIcon onClick={toggle}/>) : (<BedtimeOutlinedIcon onClick={toggle}/>)}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className="user">
                        <a href="/profile/:id"><img src={currentUser.profilePic} alt=""></img></a>
                        
                        <span> {currentUser.name}</span>
                        
                </div>

            </div>
            
        </div>
    )
}

export default NavBar


