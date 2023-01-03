import React from 'react';
import LoginFormPage from '../LoginFormPage';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className='main-container'>
                <div className='main-content'>
                    <div className='photo-slide-container'>
                        <div className='photo-slide-content' id="photo-slide-content">
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
                </div>
            </div>
        </div>
    )
}

export default LandingPage;