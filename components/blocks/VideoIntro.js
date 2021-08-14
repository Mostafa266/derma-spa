import React from 'react';

export default function VideoIntro() {
    return (
        <section className="video--intro">
            <div className="container">
                <div className='video--intro--content'>
                    <div className='row'>
                        <div className='col-12 col-lg-5'>
                            <div className='video--intro--content--text'>
                                <h4 className="primary--title  primary--title-blue">
                                    Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs and
                                    symptoms.
                                </h4>
                                <p>
                                    By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction
                                    with type II receptors and prevents IL-13-induced inflammatory responses in the
                                    skin(1,2).
                                </p>
                                <p>
                                    Adtralza® selectively modulates the dysregulated immune system by(1):
                                </p>
                                <ul>
                                    <li>Reducing markers of skin inflammation</li>
                                    <li>Improving markers of skin barrier integrity</li>
                                    <li>Reducing epidermal thickness</li>
                                </ul>
                                <span className="video-duration" id="video_duration_display">Duration 2:43</span>
                            </div>
                        </div>
                        <div className='col-12 col-lg-7'>
                            <div className='video--intro--content--video'>
                                {/* <video controls  className="home_video" id="home_video">
                                    <source src="./../../assets/intro.mp4" type="video/mp4"/>
                                    <source src="./../../assets/intro.webm" type="video/webm"/>
                                </video> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
