import './AboutMe.css'
import myPic from './myPic.jpg'
import pic1 from './pic1.JPG'
import pic2 from './pic2.JPG'
const aboutMe= ()=>{
    return(
        <div>
            <img className='myPic' src={myPic} alt='myPic'></img>
            <div className='intro'>
            <p>Hi there! I am Harshdeep Singh.</p>
            <p>Good to see you here. Really excited to share my works with you.</p>
            <img className='myPic' src={pic1} alt='myPic'></img>
            <img className='myPic' src={pic2} alt='myPic'></img>
            <p>Student from CMRIT college</p>
            <p>Mob No. 8400834040
                LinkedIn: /harshdeep1699
            </p>
            </div>
            
        </div>
    )
}


export default aboutMe