import React from 'react';
import LoginFormPage from '../LoginFormPage';
import './LandingPage.css';
import { useSelector } from 'react-redux';

const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user);

    return !sessionUser ? (
        <div className="landing-container">
            <div className='main-container'>
                <div className='main-content'>
                    <div className='slide-container'>
                        <div className='slide-content' id="photo-slide-content">
                            {/* <img src='' alt='landing slide image' className='active'/>
                            <img src='' alt='landing slide image'/>
                            <img src='' alt='landing slide image'/>
                            <img src='' alt='landing slide image'/>
                            <img src='' alt='landing slide image'/> */}
                        </div>
                    </div>
                    <div className='form-container'>
                        <LoginFormPage/>
                    </div>
                    {/* <div className="box goto">
                        <p>
                            Don't have an account?
                            <a href="/singup">Sign up</a>
                        </p>
                    </div>

                    <div className="download">
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