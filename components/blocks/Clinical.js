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
                            <ToolsCard/>
                        </div>
                        <div className="col-12 col-md-6">
                            <ToolsCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
