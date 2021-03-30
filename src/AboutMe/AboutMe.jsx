import './AboutMe.css'
import myPic from './myPic.jpg'
import pic1 from './pic1.JPG'
import pic2 from './pic2.JPG'
const aboutMe= ()=>{
    return(
        <div>
            <div className='intro'>
            <img className='myPic' src={myPic} alt='myPic'></img>
            <div className='intro-text'>
            <p>Hi there! I am Harshdeep Singh.</p>
            <p>Good to see you here. Really excited to share my works with you.</p>
            </div>

            <p>Student from CMRIT college</p>
            <p>Mob No. 8400834040
                LinkedIn: /harshdeep1699
            </p>
            
            <div className='pics'>
            <img className='myPic1' src={pic1} alt='myPic'></img>
            <img className='myPic1' src={pic2} alt='myPic'></img>
            </div>
            
            
            </div>
            
        </div>
    )
}


export default aboutMe