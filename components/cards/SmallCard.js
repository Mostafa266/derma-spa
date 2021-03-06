import React from 'react'

export default function SmallCard() {
    return (
        <div className="small--card mr-2">
        <div className="small--card--video">
            <div className="play--btn"  tabIndex="0" aria-describedby="Play video">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6428 8.35282C17.9761 9.12262 17.9761 11.0471 16.6428 11.8169L3.48567 19.4132C2.15234 20.183 0.485673 19.2207 0.485673 17.6811L0.485674 2.48862C0.485674 0.949015 2.15234 -0.0132313 3.48567 0.756569L16.6428 8.35282Z" fill="white"/>
                </svg>
            </div>
        </div>
        <div className="small--card--text">
            <h6 className="primary--title small primary--title-blue">Video title</h6>
            <p>Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image</p>
        </div>
    </div>
    )
}
