import './AboutMe.css'
import myPic from './myPic.png'
import pic1 from './pic1.JPG'
import pic2 from './pic2.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import linkedin from './linkedin.png'
const aboutMe= ()=>{
    return(
        
        <div>
          <div className='carouselAndText'>
          <Carousel pause="false" className='carous'>
           <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={pic2}
                alt="First slide"
              ></img>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={pic1}
                alt="First slide"
              />
            </Carousel.Item>
            </Carousel>
            <p className='carousText'>About Harshdeep</p>
          </div>

          <div className='intro'>
            <img className='myPic' src={myPic} alt='myPic'></img>
            <p className='introText'>
            Good to see you here. Really excited to share my works with you.
            </p>
            <hr></hr>
          </div>

          <div className="aboutMe">
            <p className='title'>About Me</p>
            <p className='desc'>
            As of April 2021, I am an IT student at CMRIT,Bengaluru for last 4 years and I have good knowledge about 
            programming and web development using React.js.
            </p>
          </div>

          <div className="aboutMe">
            <p className='title'>My Story</p>
            <ul>
            <li className='desc'>
              I started learning to code at the age of 15.
            </li>
            <li className='desc'>
              Studied JAVA and MySQL in my High School. 
            </li>
            <li className='desc'>
              Throughout my college, I have learnt about different domains in technology,
               like Machine Learning, Operating Systems, Cryptography, Computer Networks and many more.
            </li>
            <li className='desc'>
              I have created projects on using the following:
              <ul>
              <li className='desc'>
              React.js
              </li>
              <li className='desc'>
              Firebase
              </li>
              <li className='desc'>
              HTML, CSS, Javascript
              </li>
              <li className='desc'>
              Netbeans and MySQL
              </li>
              <li className='desc'>
              Angular Framework
              </li>
              </ul>
            </li>
            </ul>
            
          </div>


          <div className='contact'>
            <p className='text'>Contact Me
            <a target="_blank" href='https://www.linkedin.com/in/harshdeep1699'className='linkedinButton'>
              <span><img className='linkedinspan' 
                      src={linkedin}></img>
              </span>LinkedIn Profile</a></p>
            <p className='text'>Mob No. 8400834040</p>
              <p className='text'>Email: harshdeep4898@gmail.com</p>
              
          </div>
        </div>
    )
}


export default aboutMe