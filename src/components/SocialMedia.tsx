import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const SocialMedia: React.FC = () => {
    return (
        <div className='app__social'>
            <a href='https://www.linkedin.com/in/dmitri-kolisnichenko-a41813220/'>
                <AiFillLinkedin/>
            </a>
            <a href='https://github.com/koldi887'>
                <AiFillGithub/>
            </a>
        </div>
    );
};

export default SocialMedia;