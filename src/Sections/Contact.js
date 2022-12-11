import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {toast} from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const handleForm = event => {
        event.preventDefault();
        
        emailjs.sendForm('service_es1hqtb', 'template_wyn3a4u', form.current, '_p8j2B5ibh-br2Xtx')
            .then((result) => {
                toast.success('We got your email and we\'ll contact with you ASAP, Thanks');
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div id="contact" className='my-16'>
            <header className='ml-3'>
                <h4 className='text-xl text-blue-900 font-semibold uppercase'>Contact</h4>
                <h2 className='text-3xl font-bold uppercase mt-2'>Get In Touch</h2>
            </header>
            <div className='ml-3 mt-5'>
                <form ref={form} onSubmit={handleForm}>
                    <div className="form-control lg:w-2/3 mt-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="user_name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-2/3 mt-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="user_email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control lg:w-2/3 mt-2">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name="message" className="textarea textarea-bordered" placeholder="Write your message..."></textarea>
                    </div>
                    <div className="form-control mt-6 w-1/2">
                        <button className="btn btn-primary">Contact with me</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;