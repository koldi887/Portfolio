import React, {useState,} from 'react';

import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';
import {client} from '../../client';
import './Footer.scss';
import {useForm} from "react-hook-form";

type FormDataType = {
    name: string
    email: string
    message: string
}

const Footer = () => {
    const {register, handleSubmit} = useForm<FormDataType>();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFormSubmit = handleSubmit((data) => {
        setLoading(true);

        const contact = {
            ...data,
            _type: 'contact'
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    });

    return (
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:koldi887@gmail.com"
                       className="p-text">koldi887@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone"/>
                    <a href="tel:+358 40 179 4409" className="p-text">+358 40
                        179 4409</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <form className="app__footer-form app__flex"
                      onSubmit={onFormSubmit}>
                    <div className="app__flex">
                        <input className="p-text" type="text"
                               placeholder="Your Name"
                               {...register("name", {
                                   required: true,
                               })}
                        />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email"
                               placeholder="Your Email"
                               {...register("email", {
                                   required: true,
                               })}
                        />
                    </div>
                    <div>
            <textarea
                className="p-text"
                placeholder="Your Message"
                {...register("message", {
                    required: true,
                })}
            />
                    </div>
                    <button type="submit"
                            className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
                </form>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);