import React, { useState } from 'react';
import SubNav from './SubNav';

export default function PrimaryNav() {

    const [mounted, setMounted] = useState(false);
    const toggleMount = () => setMounted(!mounted);
    return (
        <div className="nav nav--primary">
        <div className="container">
            <ul className="nav--list nav--primary--list">
                <li onClick={toggleMount} className="nav--list--item nav--primary--list--item ">
                    <a className="nav--list--link " href="#" tabIndex="0">Bedingungen</a>
                    {mounted ? <SubNav/> : null}
                </li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#" tabIndex="0">Behandlungen</a>
                </li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#"  tabIndex="0">Veranstaltungen</a></li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#"  tabIndex="0">Werkzeuge</a></li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#" tabIndex="0">Forschung und Erkenntnisse</a></li>
            </ul>
        </div>
    </div>
    )
}
