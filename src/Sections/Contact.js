import React from 'react';

const Contact = () => {
    return (
        <div className='my-16'>
            <header className='ml-3'>
                <h4 className='text-xl text-blue-900 font-semibold uppercase'>Contact</h4>
                <h2 className='text-3xl font-bold uppercase mt-2'>Get In Touch</h2>
            </header>
            <div className='ml-3 mt-5'>
                <form>
                    <div className="form-control w-1/2 mt-2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2 mt-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control w-1/2 mt-2">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="Write your message..."></textarea>
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