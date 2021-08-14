import React from 'react'
import Image from 'next/image';
import headerBG from './../../public/headerBG.jpg';
import adtralza_global from './../../public/adtralza_global.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-bg">
                <Image src={headerBG} alt='Header background' className='headerImage' />
            </div>
            <div className="container">
                <div className="header--text--content">
                    <Image src={adtralza_global} alt='adtralza_global'/>
                    <h5>
                        Adtralza® is a new treatment for adult patients with moderate-to-severe atopic
                        dermatitis (eczema) who are candidates for systemic therapy.
                    </h5>
                </div>
            </div>
        </header>
    )
}
