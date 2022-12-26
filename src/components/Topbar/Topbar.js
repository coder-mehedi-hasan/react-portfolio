import React from 'react';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className='top_bar'>
            <div className="container">
                <div className="main">
                    <div className="item">
                        <p>
                            <a href="../Home.js">mh8389807@gmail.com</a>
                        </p>
                    </div>
                    <div className="item">
                        <p><a href="../Home.js">LogIn</a> / <a href="../Home.js">SignUp</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;