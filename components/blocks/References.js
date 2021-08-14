import React from 'react';

export default function References() {

    const handleOpen = () =>{
        references.classList.toggle('isOpen')
    }


    return (
        <div className="references " id="references">
            <div className="container">
                <div className="references--header">
                    <div className="references--header--btn" tabIndex="0" id="references__btn" onClick={handleOpen}>
                        <div className="references--header--btn--icon">
                            <svg
                                width="17"
                                height="10"
                                viewBox="0 0 17 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.302932 1.02483C-0.0875923 1.41535 -0.0875925 2.04852 0.302932 2.43904L7.374 9.51011C7.76452 9.90063 8.39769 9.90063 8.78821 9.51011C8.78854 9.50978 8.78887 9.50945 8.7892 9.50912L15.8593 2.43904C16.2498 2.04852 16.2498 1.41535 15.8593 1.02483C15.4688 0.634302 14.8356 0.634302 14.4451 1.02483L8.08111 7.38879L1.71715 1.02483C1.32662 0.634303 0.693456 0.634303 0.302932 1.02483Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <span>references</span>
                    </div>
                </div>
                <div className="references--body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias accusantium
                        pariatur quasi. Quaerat sunt earum nihil saepe, quam obcaecati inventore
                        adipisci nam porro dolor itaque ipsum magni, molestiae nisi suscipit?</p>

                </div>
            </div>
        </div>
    )
}
