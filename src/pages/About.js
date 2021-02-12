import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Ignacio from '../images/ign.jpg'

function About(props) {
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <div className='about-squares'>
                    <div className='about-square'>
                        <div className='about-text'>
                            <p> Hello, My name is Ignacio I'm a Software Developer with knowledge in HTML5, 
                            CSS, JavaScript, Python, GitHub, SQL, React, JSX, VSCode, Terminal, MySQL, Postman, 
                            and FireBase. </p>
                            
                            <p> I got into Programming in 2018, started learning by myself and eventually took 
                            a Bootcamp course. One thing I love about Programming is that we never stop learning 
                            either new languages, frameworks, systems, etc. Long-term goal is to get into Quantum 
                            computing and get into finance. </p>
                            
                            <p> I'm planning on continuing learning and creating new Apps and focus on training 
                            and understanding everything I use from a high level to a low level. I use UML to guide 
                            myself through projects and like to collaborate through GitHub and StackOverflow.  </p>
                            
                            <p>Looking for my next challenge as a Developer and to never stop learning.</p>
                        </div>
                        <div className='about-img'>
                            <img src={Ignacio} id='chef' alt='chef' />
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    )
};

export default About;