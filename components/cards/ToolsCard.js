import React from 'react'
import woman from './../../public/woman.png';
import Image from 'next/image';

export default function ToolsCard(props) {
    return (
        <div className="tool--card  mr-3">
            <div className="tool--card--header">
                <Image src={woman} alt="Dosing guide"/>
            </div>
            <div className="tool--card--body">
                <h5 className="primary--title primary--title-blue">{props.title}</h5>
                <p>{props.desc}</p>
                <a href="#">{props.link}</a>
            </div>
        </div>

    )
}
