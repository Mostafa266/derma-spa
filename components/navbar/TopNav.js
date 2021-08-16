import React from 'react'
import Image from 'next/image'
import heroBG from './../../public/DermaWorld.png';

export default function TopNav() {
    const handleSide = () =>{
        nav.classList.toggle('nav-sideIsOpen')
        nav.classList.toggle('active')
    }
    return ( 
    <>
     <div className="nav nav--top">
        <div className="container">
            <div className="nav--top--content">
                <div className="nav--top--logo">
                    <Image src={heroBG}  alt='Derma world hero logo'/>
                    </div>
                    <div className="nav--top--right">
                        <div className="nav--top--group">
                            <span className="nav--top--group--icon" tabIndex="0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </span>
                            <input
                                className="nav--top--group--input"
                                type="text"
                                name="Search box"
                                placeholder="Search"/>
                        </div>
                        <div className="menu-btn" id="menu-btn" tabIndex="0" onClick={handleSide}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    )
}
