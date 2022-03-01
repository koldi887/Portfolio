import React from 'react';
import {NavigationDots, SocialMedia} from "../components";
import FileSaver from 'file-saver';

const AppWrap = (Component: React.FC, idName: string, classNames?: string) => function HOC() {

    const downloadResumeHandler = () => {
        FileSaver.saveAs(
            process.env.PUBLIC_URL + "https://cdn.sanity.io/files/6j6qwla4/production/fec1a70f1fab15c597b89667e4c93485ecbcf9a9.pdf",
            "Dmitri_Resume.pdf");
    }

    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <button onClick={downloadResumeHandler}> Download</button>
            <SocialMedia/>
            <div className='app__wrapper app__flex'>
                <Component/>
                <div className='copyright'>
                    <p className='p-text'>@2022 DMITRI</p>
                    <p className='p-text'>All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName}/>
        </div>
    );
}

export default AppWrap;