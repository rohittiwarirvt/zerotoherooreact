import React from 'react';
import  "./homepage.style.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item"><div class="content">
                <h1 className="title">Hats</h1>
                <span className="subtitle">SHOP NOW</span> </div>
            </div>
            <div className="menu-item"><div class="content">
                <h1 className="title">Jackets</h1>
                <span className="subtitle">SHOP NOW</span> </div>
            </div>
            <div className="menu-item">
                <div class="content">
                                    <h1 className="title">Sneakers</h1>
                <span className="subtitle">SHOP NOW</span></div>

            </div>
            <div className="menu-item"><div class="content">
                <h1 className="title">Women</h1>
                <span className="subtitle">SHOP NOW</span> </div>
            </div>
            <div className="menu-item"><div class="content">
                <h1 className="title">Menu</h1>
                <span className="subtitle">SHOP NOW</span> </div>
            </div>
        </div>
    </div>
)

export default HomePage;