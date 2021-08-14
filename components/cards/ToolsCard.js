import React from 'react'
import woman from './../../assets/woman.png';
import Image from 'next/image';

export default function ToolsCard() {
    return (
        <div className="tool--card  mr-3">
            <div className="tool--card--header">
                <Image src={woman} alt="Dosing guide"/>
            </div>
            <div className="tool--card--body">
                <h5 className="primary--title primary--title-blue">Dosing guide</h5>
                <p>Adtralza® has a straightforward dosing regimen, with 150 mg prefilled
                    syringes(1).</p>
                <a href="#">Watch the video</a>
            </div>
        </div>

    )
}
