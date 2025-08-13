import "./profile.scss"
import Posts from "../../components/posts/posts"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Profile = () => {
  return (

    
    <div className="profile"> 
    
      <div className="images">
        <img src="https://i.pinimg.com/1200x/ad/d8/a7/add8a7ee40a3f19c671f1deb8f824e5f.jpg" alt="" className="cover" />
        <img src="https://i.pinimg.com/736x/95/00/4b/95004bdce7df298d67e11652b20ff99a.jpg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">

          <div className="left"></div>
          <div className="center">
            <span>Peter Parker</span>
            <div className="info">
              <div className="item">
                  <LocationOnIcon/>
                  <span>NY, USA</span>
              </div>
              <div className="item">
                  <LanguageIcon/>
                  <span>spidey.com</span>
              </div>
            </div>
              <button>Follow</button> 
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Posts/>
      </div>
      

    </div>
  )
}

export default Profile
