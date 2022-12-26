import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="main">
                    <div className="item">
                        <div className="detail">
                        <h3>Hi There, I'm Md Mehedi Hasan</h3>
                        <p>I'm a Front End Web Devloper</p>
                        <p>I'm a Diploma Engineer</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <p>Profile Image</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;