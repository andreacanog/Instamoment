import React from 'react';
import LoginFormPage from '../LoginFormPage';
import './LandingPage.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import pic1 from '../../login-assets/pic1.png'
import pic2 from '../../login-assets/pic2.png'
import pic3 from '../../login-assets/pic3.png'
import pic4 from '../../login-assets/pic4.png'

const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user);

    let slideContent = document.querySelector('#photo-slide-content')
    let slideIndex = 0

    const photoSlide = () => {
        let slideItems = slideContent.querySelectorAll('img');
        console.log(slideItems)
        slideItems.forEach(e => e.classList.remove('active'))
        slideIndex = slideIndex + 1 === slideItems.length ? 0 : slideIndex + 1
        slideItems[slideIndex].classList.add('active')
    }
    
    useEffect(() => {
        setInterval(photoSlide, 2000);
    }, [slideContent])

    return !sessionUser ? (
        <div className="landing-container">
            <div className='main-container'>
                <div className='main-content'>
                    <div className='slide-container'>
                        <div className='slide-content' id="photo-slide-content">
                            <img src={pic1} alt='landing slide picture' className='active'/>
                            <img src={pic2} alt='landing slide picture'/>
                            <img src={pic3} alt='landing slide picture'/>
                            <img src={pic4} alt='landing slide picture'/>
                        </div>
                    </div>
                    <div className='form-container'>
                    {/* <div> */}
                        <LoginFormPage/>
                    </div>

                    {/* <div className="download">
                        <p>Get the app.</p>
                        <div className="link">
                            <a href="#">
                                <img src="" alt=""/>
                            </a>
                            <a href="#">
                                <img src="" alt=""/>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    ) : <></>
}

export default LandingPage;