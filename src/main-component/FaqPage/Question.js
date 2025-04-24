import React from 'react';
import Qimg from '../../images/resource/faq.png'
import ContactFormModal from '../../components/ContactFormModal/ContactFormModal';
import ContactForm from '../../components/ContactFrom';

const Question = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="faq-form-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="form-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <div className="title">Your Quesiton</div>
                                <h2>Tell Us Any Question</h2>
                                <div className="text">We provide best service for our customer check the list now.</div>
                            </div>
                            <div className="faq-form">
                                {/* <form method="post" onSubmit={SubmitHandler}>
                                    <div className="form-group">
                                        <input type="text" name="username" value="" placeholder="Name" required />
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" value="" placeholder="Email" required />
                                    </div>

                                    <div className="form-group">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Send Question</span></button>
                                    </div>

                                </form> */}
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image titlt" data-tilt data-tilt-max="3">
                                <img src={Qimg} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};
export default Question;

