import React from 'react'
import Image from 'next/image';
import packshot from './../../assets/adtralza-packshot-gebau.png';

export default function OurProduct() {
    return (
        <section className='our-product'>
            <div className="container">
                <div className="our-product--content">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="our-product--content--img">
                                <Image src={packshot} alt='adtralza-packshot'/>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="our-product--content--text">
                                <p className="primary--title primary--title-blue">It is the first and only
                                    biologic developed to specifically neutralize IL-13, a key driver of atopic
                                    dermatitis signs and symptoms(1,2)</p>
                                <a href="#">Learn more about how Adtralza® works and how to use it in treatment.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
