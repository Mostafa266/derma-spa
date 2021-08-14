import React from 'react';
import ThirdNav from './ThirdNav';
export default function SubNav() {
    return (
        <div className="nav nav--sub nav--inside nav-grey">
            <div className="container">
                <ul className="nav--list nav--sub--list">
                    <li className="nav--list--item nav--sub--list--item ">
                        <a className="nav--list--link nav--list--link-blue " href="#">Adtralza1</a>
                        <ThirdNav/>
                    </li>
                    <li className="nav--list--item nav--sub--list--item "><a className="nav--list--link nav--list--link-blue" href="#">Diavonex</a>
                    <ThirdNav/>

                    </li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Diavobet</a>
                    <ThirdNav/>
                    </li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Enstilar</a></li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Fucidin</a></li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Kyntheum</a></li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Protopic</a></li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Skinoren</a></li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Tralokinumab</a></li>
                    <li className="nav--list--item nav--sub--list--item"><a className="nav--list--link nav--list--link-blue" href="#">Xamiol</a></li>
                </ul>
            </div>
        </div>
    )
}
