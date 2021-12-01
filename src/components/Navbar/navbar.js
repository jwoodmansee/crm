import React from 'react';
import nImg from '../../assets/images/n-img.jpg'

import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar position-start navbar-expand-md navbar-light bg-light">
            <div className="container-xxxl container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Calendar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tasks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">Tickets</a>
                        </li>
                    </ul>
                    <div className="d-flex navbar-icon-list">
                        <div className="navbar-icon">
                            <button className='nav-btn'>
                                <i className='fal fa-copy txt-success'></i>
                            </button>
                        </div>
                        <div className="navbar-icon">
                            <button className='nav-btn'>
                                <i className="fal fa-tachometer-alt txt-success"></i>
                            </button>
                        </div>
                        <div className="navbar-icon">
                            <button className='nav-btn'>
                                <i className='fal fa-stopwatch txt-success'></i>
                            </button>
                        </div>
                        <div className="navbar-icon">
                            <button className='nav-btn'>
                                <i className='far fa-cog '></i>
                            </button>
                        </div>
                        <div className="navbar-icon">
                            <button className='nav-btn'>
                                <i className='fad fa-clipboard-list'></i>
                            </button>
                        </div>
                        <div className="navbar-icon">
                            <button className='nav-btn'>
                                <i className='fas fa-bell'></i>
                            </button>
                        </div>
                        <div style={{ marginRight: '15px' }}>
                            <img src={nImg} height='50' width='50' />
                        </div>
                        <div className='d-flex flex-column'>
                            <span className='user-name-in'>Justin Woodmansee</span>
                            <span className='user-email-in'>justin@easieraccounting.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;