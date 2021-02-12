import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Hero(props) {
    return(
        <Jumbotron className='gb-transparent jumbotron-fluid p-0'>
            <Container fluid={true} >
                <Row className='justify-content-center py-5' >
                    <Col md={8} sm={12} >
                        { props.title && <h1 className='font-weight-bolder linear-font typewriter' >{props.title}</h1>}
                        { props.subTitle && <h3 className='display-4 font-weight-light'>{props.subTitle}</h3>}
                        { props.text && <h3 className='lead font-weight-light ' >{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
