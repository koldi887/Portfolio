import React from 'react';

type NavigationDotsPropsType = {
    active: string
}

const NavigationDots: React.FC<NavigationDotsPropsType> = ({active}) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                <a href={`#${item}`}
                   key={item + index}
                   className='app__navigation-dot'
                   style={active === item ? {backgroundColor: '#313BAC'} : {}}
                >
                </a>
            ))}
        </div>
    );
};

export default NavigationDots;