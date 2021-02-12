import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardInfo(props) {

    const style = useSpring({opacity: 1, color:'teal', from: {opacity: 0}});

    return(
        <animated.div className='g-card-info' style={style}>
            <p className="g-card-title" >{props.title}</p>
            <p className="g-card-sub-title" >{props.subTitle}</p>
            <div className='links-cardinfo'>
                <a href={props.link} target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon className='icon' icon="arrow-right" />
                </a>
                <a href={props.code} target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon className='icon' icon="code" />
                </a>
            </div>

            
        </animated.div>
    );
};

export default CardInfo;