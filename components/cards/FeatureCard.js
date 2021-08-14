import React from 'react'
import Image from 'next/image';
import decoration from './../../assets/decoration.svg';

export default function FeatureCard() {
    return (
        <div>
            <div className="feature--card">
                <div className="feature--card--header">
                    <span className="current--number current--number-blue">9</span>
                    <span className="current--number--sub">out of 19</span>
                    <span className="decoration">
                        <Image src={decoration} alt='decoration'/>
                    </span>
                </div>

                <div className="feature--card--body">
                    <h4 className="feature--card--body--title">Long term sustained improvement</h4>
                    <p>
                        9 out of 10 respondents experienced sustained disease control in clinical trials
                        10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡).
                    </p>
                    <a href="#">
                        See efficacy and trial data
                    </a>
                </div>

            </div>
        </div>
    )
}
