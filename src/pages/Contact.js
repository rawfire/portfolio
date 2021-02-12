import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
// import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });
        // 'http://localhost:3000/contact'
        axios.post('/email', this.state) 
            .then((res) => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }

            })
            .catch((err) => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    };


    render() {

        return(
            
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <section>
                        <h1>Ignacio A. Andaur</h1>
                        <h2> Software Developer</h2>
                        <h3><a href='mailto:ignatius.and@gmail.com'>ignatius.and@gmail.com</a></h3>
                        <p> phone: 917.254.5976</p>
                        <a href='https://www.linkedin.com/in/ignacio-andaur-628883197/'>Linkedin</a> | <a href='https://github.com/rawfire'>GitHub</a>
                    </section>
                    <br/>
                    <section>
                        <h2>Summary</h2>
                        <p>
                            I'm a Software Developer with knowledge in HTML5, CSS, JavaScript, 
                            Python, GitHub, SQL, React, JSX, VSCode, Terminal, MySQL, Postman, 
                            and FireBase. Currently Working on a Social Media Project and want 
                            to learn more about Machine Learning, Quantum Computing and Blockchain. 
                            Looking for my next challenge as a Developer and to never stop learning.
                        </p>
                    </section>
                    <br/>
                    <section>
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript</li> 
                            <li>Firebase</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>React</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>UML</li>
                            <li>JSON</li>
                            <li>GitHub</li>
                            <li>MongoDB</li>
                            <li>SCSS/SASS</li>

                        </ul>
                    </section>
                    <br/>
                    <section>
                        <h2>Projects</h2>
                        <p>
                            <b>Portfolio Project :</b> 
                            A portfolio application integrating and using API’s, 
                            built with React JS, JSX, CSS, SCSS, and Node.js. Site 
                            layout with CSS Grid and Flexbox. Includes user authentication 
                            and CRUD functionality via API and AXIOS.
                        </p>
                        <br/>
                        <p>
                            <b>Design E-Commerce Store :</b> 
                            This was built with React, JS, JSX, HTML, CSS, SCSS the site uses 
                            React and JSX to implement structure and flow. I focused on the 
                            CSS and SCSS aesthetics of the front end viewing page flow of 
                            objects in cart and authentication into the page.
                        </p>
                        <br/>
                        <p>
                            <b>Restaurant Web Page :</b>  
                            This project I made a page for a restaurant from HTML and CSS using 
                            connecting google maps to it and adding additional links to external 
                            sites such as social media.
                        </p>
                    </section>
                    <br/>
                    <section>
                        <h3> Education</h3>
                        <h6>Graduated 2002 - Greenwich High School</h6>
                        <h6>Attended 2003-04 - Norwalk Commuity College</h6>
                        <h6>Certified 2010 - New York Institute of Photography</h6>
                        <h6>Certified 2020 - Bottega BootCamp (Accredited Certificate of Competency. Backed by ACE and AdvancEd.)</h6>
                    </section>
                </Content>

            </div>
        )
    }
}

export default Contact;


  
                // <Hero title={this.props.title} />
                // <Content>
                //     <Form onSubmit={this.handleSubmit} >
                //         <Form.Group>
                //             <Form.Label htmlFor="full-name" >Full Name</Form.Label>
                //             <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                //         </Form.Group>

                //         <Form.Group>
                //             <Form.Label htmlFor="email" >E-mail</Form.Label>
                //             <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                //         </Form.Group>

                //         <Form.Group>
                //             <Form.Label htmlFor="message" >Message</Form.Label>
                //             <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                //         </Form.Group>

                //         <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled} >
                //             Send
                //         </Button>

                //         {this.state.emailSent === true && <p className="d-inline success-msg" >E-mail Sent.</p>}
                //         {this.state.emailSent === false && <p className="d-inline err-msg" >E-mail Not Sent.</p>}

                //     </Form>
                // </Content>