import React from 'react';
import SmallCard from '../cards/SmallCard';


export default function Insights() {
    return (
        <section className="video--insights">
        <div className="container">
            <div className="video--insights--content">
                <h5 className="primary--title primary--title-blue">KOL Videos - get expert insights here</h5>
                <p>See what Key opinion leaders have to say about their experiences with Adtralza® </p>
                <div className="video--insights--cards--container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mr-5">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <SmallCard/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                    <SmallCard/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                           <div className="mr-5">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                <SmallCard/>

                                </div>
                                <div className="col-12 col-md-6">
                                <SmallCard/>

                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
