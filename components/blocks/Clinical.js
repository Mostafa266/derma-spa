import React from 'react'
import ToolsCard from '../cards/ToolsCard';

export default function Clinical() {
    return (
        <section className="clinical--tools">
        <div className="container">
            <div className="clinical--tools--content">
                <h4 className="primary--title primary--title-blue">
                    Clinical tools - at a glance
                </h4>
                <div className="clinical--tools--cards--container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ToolsCard title='Dosing guide' desc='Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1).' link='Learn more about application and dosing'/>
                        </div>
                        <div className="col-12 col-md-6">
                        <ToolsCard title='Patient injection made simple' desc='AThis step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.' link='Watch the video'/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
