import React from 'react';
import Image from 'next/image';
import leo from './../../public/leo.png';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer--top">
                <div className="footer--top--logo">
                    <Image src={leo} alt='leo-hero'/>
                </div>
                <div className="footer--top--data">
                   <p><span>© Copyright LEO Pharma 2020</span>
                    <span>LEO and the LEO Lion Design</span>
                    <span>are registered trademarks</span>
                    <span>of LEO Pharma</span>
                   <span> All rights reserved</span>
                   <span>LEO Pharma corporate website</span>
                </p>
                </div>
            </div>
            <div className="footer--bottom">
                <ul>
                    <li  tabIndex="0"><a href="#">Contact</a></li>
                    <li tabIndex="0"><a href="#" >imprint</a></li>
                    <li tabIndex="0"><a href="#" >conditions</a></li>
                    <li tabIndex="0"><a href="#" >terms of use</a></li>
                    <li tabIndex="0"><a href="#">privacy</a></li>
                    <li tabIndex="0"><a href="#" >cookie content</a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}
