import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import {images} from '../../constants'
import './About.scss'
import {urlFor, client} from "../../client";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

type aboutsType = {
    title: string,
    description: string,
    imgUrl: string
}

const About = () => {
    const [abouts, setAbouts] = useState<aboutsType[]>([])

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch<aboutsType[]>(query)
            .then(data => setAbouts(data))
    }, [])

    return (
        <>
            <h2 className='head-text'>I Know That <span>Good Development</span>
                <br/> means <span>Good Business</span>
            </h2>
            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img
                            // @ts-ignore
                            src={urlFor(about.imgUrl)} alt={about.title}/>
                        <h2 className='bold-text'
                            style={{marginTop: 20}}>{about.title}</h2>
                        <p className='p-text'
                           style={{marginTop: 20}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default About;
