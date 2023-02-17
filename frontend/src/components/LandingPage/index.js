import React from 'react';
import LoginFormPage from '../LoginFormPage';
import './LandingPage.css';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState} from 'react';
import pic1 from '../../login-assets/pic1.png'
import pic2 from '../../login-assets/pic2.png'
import pic3 from '../../login-assets/pic3.png'
import pic4 from '../../login-assets/pic4.png'
import { Redirect } from 'react-router-dom';
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'


const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const imgRef = useRef(new Array());
    let slideIndex = 0
    let slideItems = imgRef.current;

    useEffect(() => {
        if (sessionUser !== null) return;
        const photoSlide = () => {
            if (!slideItems.length) return;
            slideItems.forEach(e => e.classList.remove('active'))
            slideIndex = (slideIndex + 1 === slideItems.length || slideItems[slideIndex + 1] === undefined)? 0 : slideIndex + 1
            slideItems[slideIndex].classList.add('active')
        }
        setInterval(photoSlide, 2000);
    }, [])

    const addToImgRefArr = (item) => {
        if (imgRef.current.length < 5) {
            imgRef.current.push(item)
        }
        if (slideIndex === 4) {
            slideIndex = 0;
        }
    }

    return !sessionUser ? (
        <div className="landing-container">
            <div className='main-container'>
                <div className='main-content'>
                    <div className='slide-container'>
                        <div className='slide-content' id="photo-slide-content">
                            <img ref={ele => addToImgRefArr(ele)} src={pic1} alt='landing slide picture' className='active'/>
                            <img ref={ele => addToImgRefArr(ele)} src={pic2} alt='landing slide picture'/>
                            <img ref={ele => addToImgRefArr(ele)} src={pic3} alt='landing slide picture'/>
                            <img ref={ele => addToImgRefArr(ele)} src={pic4} alt='landing slide picture'/>
                            <img ref={ele => addToImgRefArr(ele)} src={pic4} alt='landing slide picture'/>
                    
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
            <div className='links'>
                <a href="https://www.linkedin.com/in/andrea-cano-gisbert-4402151b8/" target="_blank" rel="noreferrer">
                    <i className="linkedin"><AiFillLinkedin/></i>
                </a>
                <a href="https://github.com/andreacanog" target="_blank">
                    <i className="github"><BsGithub/></i>
                </a>
            </div>
        </div>
    ) : <></>
    
}

export default LandingPage;