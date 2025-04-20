// import React, { useState } from 'react'
// import SimpleReactValidator from 'simple-react-validator';


// const ContactForm = () => {

//     const [forms, setForms] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         phone: '',
//         message: ''
//     });
//     const [validator] = useState(new SimpleReactValidator({
//         className: 'errorMessage'
//     }));
//     const changeHandler = e => {
//         setForms({ ...forms, [e.target.name]: e.target.value })
//         if (validator.allValid()) {
//             validator.hideMessages();
//         } else {
//             validator.showMessages();
//         }
//     };

//     const submitHandler = e => {
//         e.preventDefault();
//         if (validator.allValid()) {
//             validator.hideMessages();
//             setForms({
//                 name: '',
//                 email: '',
//                 subject: '',
//                 phone: '',
//                 message: ''
//             })
//         } else {
//             validator.showMessages();
//         }
//     };

//     return (
//         <form onSubmit={(e) => submitHandler(e)}>
//             <div className="row clearfix">
//                 <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                     <span className="icon flaticon-user-2"></span>
//                     <div className="form-field">
//                         <input
//                             value={forms.name}
//                             type="text"
//                             name="name"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Your Name" />
//                         {validator.message('name', forms.name, 'required|alpha_space')}
//                     </div>
//                 </div>

//                 <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                     <span className="icon flaticon-phone-call"></span>
//                     <div className="form-field">
//                         <input
//                             value={forms.phone}
//                             type="text"
//                             name="phone"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Your phone" />
//                         {validator.message('phone', forms.phone, 'required|phone')}
//                     </div>
//                 </div>

//                 <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                     <span className="icon flaticon-big-envelope"></span>
//                     <div className="form-field">
//                         <input
//                             value={forms.email}
//                             type="email"
//                             name="email"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Your Email" />
//                         {validator.message('email', forms.email, 'required|email')}
//                     </div>
//                 </div>

//                 <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                     <span className="icon flaticon-notepad"></span>
//                     <div className="form-field">
//                         <input
//                             value={forms.subject}
//                             type="text"
//                             name="subject"
//                             onBlur={(e) => changeHandler(e)}
//                             onChange={(e) => changeHandler(e)}
//                             placeholder="Subject" />
//                         {validator.message('subject', forms.subject, 'required')}
//                     </div>
//                 </div>

//                 <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                     <span className="icon flaticon-message"></span>
//                     <textarea
//                         onBlur={(e) => changeHandler(e)}
//                         onChange={(e) => changeHandler(e)}
//                         value={forms.message}
//                         type="text"
//                         name="message"
//                         placeholder="Message">
//                     </textarea>
//                     {validator.message('message', forms.message, 'required')}
//                 </div>

//                 <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
//                     <button className="theme-btn btn-style-three" type="submit" name="submit-form"><span className="txt">Submit Now</span></button>
//                 </div>

//             </div>
//         </form>
//     )
// }

// export default ContactForm;


import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { API_BASE_URL } from '../../api/config/apiConfig'; 
import axios from 'axios';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const NAME = "name";
    const EMAIL = "email";
    const PHONE_NUMBER = "phone";
    const MESSAGE = "message";
    const SUBJECT = "subject";
    const IP_ADDRESS = "ip_address";
    
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
    e.preventDefault();

    if (validator.allValid()) {
        try {
            setLoading(true);
            setError(null);

            // Get the user's IP address
            const ipResponse = await axios.get('https://api.ipify.org?format=json');
            const ip = ipResponse.data.ip;

            // Prepare data according to backend keys
            const postData = {
                [NAME]: forms.name,
                [EMAIL]: forms.email,
                [PHONE_NUMBER]: forms.phone,
                [SUBJECT]: forms.subject,
                [MESSAGE]: forms.message,
                [IP_ADDRESS]: ip
            };

            // const response = await axios.post('http://192.168.1.7:8000/api/save-contact-us', postData);
             const response = await axios.post(`${API_BASE_URL}/api/save-contact-us`, postData );


            console.log('Contact Form submitted successfully==============>:', response.data);
            setSuccess(true);
            setLoading(false);

            // Reset form
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (err) {
            setLoading(false);
            setError('Failed to submit form. Please try again later.');
            console.error('Form submission error:', err);
        }
    } else {
        validator.showMessages();
    }
};


    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <div className="row clearfix">
                {error && (
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="alert alert-danger">{error}</div>
                    </div>
                )}
                
                {success && (
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="alert alert-success">Message sent successfully!</div>
                    </div>
                )}
                
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-user-2"></span>
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-phone-call"></span>
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="text"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-big-envelope"></span>
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <span className="icon flaticon-notepad"></span>
                    <div className="form-field">
                        <input
                            value={forms.subject}
                            type="text"
                            name="subject"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Subject" />
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <span className="icon flaticon-message"></span>
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                    <button 
                        className="theme-btn btn-style-three" 
                        type="submit" 
                        name="submit-form"
                        disabled={loading}
                    >
                        <span className="txt">
                            {loading ? 'Submitting...' : 'Submit Now'}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;