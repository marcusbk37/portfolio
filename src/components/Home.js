import './Home.css';
import { Link } from 'react-router-dom';
import profile_picture from '../assets/Personal_Picture.png';
import pommels_1 from '../assets/pommels_1.PNG';
import coding from '../assets/107E_1.png';
import ACE_1 from '../assets/ACE_1.png';
import amazon from '../assets/amazon_2.png';


function Home() {
    /* For the menu at the bottom - don't want pictures on every page, 
    but I think keep the menu at the bottom for UI sake.
    Also - how to get smooth transitions between pages? Right now a little choppy */
    return (
        <div className="Background">
            <header className="Profile">
                <content className="profile-text">
                    <h1 className='profile-title'>Marcus Kushner</h1>
                    <text className='profile-description'> Overview Here </text>
                </content>
                <img src={profile_picture} className="profile-picture" alt = "profile" />
            </header>

            <ul className = "Subpages">
                <Link to="/gymnastics">
                    <img src={pommels_1} className="subpage-image" alt="pommels_1" />
                </Link>
                <Link to="/computer-science"> 
                    <img src={coding} className="subpage-image" alt="coding" />
                </Link>
                <Link to="/education"> 
                    <img src={ACE_1} className="subpage-image" alt="education" />
                </Link>
                <Link to="/projects"> 
                    <img src={amazon} className="subpage-image" alt="projects" />
                </Link>
            </ul>
      </div>
    );
  }
  
  export default Home;
  