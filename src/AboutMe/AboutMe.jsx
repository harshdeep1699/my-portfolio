import './AboutMe.css'
import myPic from './myPic.png'
import pic1 from './pic1.JPG'
import pic2 from './pic2.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
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
            <p className='carousText'>Hi! Welcome to my portfolio</p>
          </div>
           
          <div className='intro'>
            <img className='myPic' src={myPic} alt='myPic'></img>
            <p className='introText'>
            Good to see you here. Really excited to share my works with you.
            </p>
          </div>
          <div className='details'>
            <p className='detailsText'>Student from CMRIT college
            Mob No. 8400834040
                LinkedIn: /harshdeep1699
            </p>
          </div>
        </div>
    )
}


export default aboutMe