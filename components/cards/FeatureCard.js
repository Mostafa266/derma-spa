import React from 'react'
import Image from 'next/image';
import decoration from './../../public/decoration.svg';

export default function FeatureCard(props) {
    return (
        <div>
            <div className="feature--card">
                <div className="feature--card--header">
                    {
                         props.textCard === false? <Image src={props.decorationImg} alt='decoration image'/> :  <>
                         <span className="current--number current--number-blue">
                            {
                                props.textCard ? props.totalNumber : null
                            }
                         </span>
                         <span className="current--number--sub">
                             {props.outNumber ? `out of ${props.outNumber}` : console.log('no')}
                         </span>
                         </>
                    }

                    <span className="decoration">
                        <Image src={decoration} alt='decoration image'/>
                    </span>
                </div>

                <div className="feature--card--body">
                    <h4 className="feature--card--body--title">
                       {props.title}
                    </h4>
                    <p>
                        {props.desc}
                    </p>
                    <a href="#">
                        {props.link}
                    </a>
                </div>

            </div>
        </div>
    )
}
