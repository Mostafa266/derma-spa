import React from 'react'
import TopNav from './TopNav';
import PrimaryNav from './PrimaryNav';
export default function Navbar() {
    return (
        // nav-sideIsOpen active
        <nav id='nav' className='nav ' tabIndex='0'>
            <TopNav/>
            <div className='sidemenu--content '>
                <PrimaryNav/>
            </div>
        </nav>
    )
}
