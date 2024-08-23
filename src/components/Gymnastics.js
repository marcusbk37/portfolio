import './Gymnastics.css';
import pommels_1 from '../assets/pommels_1.PNG';
import pommels_2 from '../assets/pommels_2.PNG';
import huddle from '../assets/huddle.png';
import celly from '../assets/celly.PNG';
import maccabiah from '../assets/maccabiah.png';

function Gymnastics() {
  return (
    <div className='Page'>
      {/* I think I also want to put in a few from high school / maybe even from middle school?
      Do I want to make some of the pictures in the background? */}
      <h1>Gymnastics: A Lifelong Journey</h1>
      <header className='pictures'>
        <img src={pommels_2} className="gym-picture" alt = "pommels_2" />
        <img src={huddle} className="gym-picture" alt = "huddle" />
        <img src={celly} className="gym-picture" alt = "celly" />
      </header>
      <text> Hit 37 consecutive routines from the time I was cleared to start competing leading up to 
        NCAA Championships to clinch my spot in the starting lineup; My 38th consecutive hit was in NCAA finals
        to help the team win a National Championship. I haven't fallen on a routine this calendar year. </text>
        <br/><br/>
      <text>Ability to put myself in difficult, high pressure situations. Ability to embrace and learn from constant
        failure and criticism. </text>
        <br/><br/>
      <img src={maccabiah} className="gym-picture" alt = "maccabiah" />
    </div>
  );
}

export default Gymnastics;
