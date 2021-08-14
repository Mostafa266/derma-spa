import React from 'react';
import SubNav from './SubNav';

export default function PrimaryNav() {
 
    return (
        <div className="nav nav--primary">
        <div className="container">
            <ul className="nav--list nav--primary--list">
                <li className="nav--list--item nav--primary--list--item "><a className="nav--list--link " href="#" tabIndex="0">Bedingungen</a>
                <SubNav/>
                </li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#" tabIndex="0">Behandlungen</a>
                <SubNav/>
            
                </li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#"  tabIndex="0">Veranstaltungen</a></li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#"  tabIndex="0">Werkzeuge</a></li>
                <li className="nav--list--item nav--primary--list--item"><a className="nav--list--link" href="#" tabIndex="0">Forschung und Erkenntnisse</a></li>
            </ul>
        </div>
    </div>
    )
}
