import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

//building navbar for all pages
const header = () => {
    return (
        <>
            <div className='main-nav'>
            <Link to='/'><div className='main-logo'><h2>UR ROOM</h2></div></Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    {/* <li><Link to='/About'>About</Link></li> */}
                    <li><Link to='/Room'>Rooms</Link></li>
                </ul>
            </div>
        </>
    )
}

export default header
