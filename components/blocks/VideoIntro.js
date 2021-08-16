import React,{useRef,useState} from 'react';




export default function VideoIntro() {

    const vidRef = useRef(null);
    const [played, setPlay] = useState(false);

    const handlePlay = _ =>{
        const myVid = vidRef;
        setPlay(!played)
        played ? myVid.current.play() : myVid.current.pause()
    }

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
                                <button onClick={handlePlay} className="dr--primary-button" id="dr--primary-button" tabIndex="0">Watch the video</button>
                                <span className="video-duration" id="video_duration_display">Duration 2:43</span>
                            </div>
                        </div>
                        <div className='col-12 col-lg-7'>
                            <div className='video--intro--content--video' >
                                <video controls  className="home_video" id="home_video" ref={vidRef}  >
                                    <source src='intro.mp4' type="video/mp4"/>
                                    <source src="intro.mp4" type="video/webm"/>
                                </video> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
