import React from 'react';

import Card from "./Card";

import eComm from "../images/eComm.jpg";
import bar from "../images/bar.jpg";
import portfolio from "../images/portfolio.jpg";
import notes from "../images/notes.jpg";
import { Container, Row } from 'react-bootstrap';


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'e-Commerce front-end',
                    subTitle: 'Styles for e-comm store with CSS, HTML5, React, JavaScript',
                    imgSrc: eComm,
                    link: 'https://ignand-ecomm-frontend.herokuapp.com/',
                    code: 'https://github.com/rawfire/ecommerce',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Restaurant Webpage',
                    subTitle: 'a simple page made with HTML and CSS adding Google Maps.',
                    imgSrc: bar,
                    link: 'https://bar-website.netlify.app/',
                    code: 'https://github.com/rawfire/dive-site',
                    selected: false
                },
                {
                    id: 2,
                    title: 'React Portfolio',
                    subTitle: 'a Portfolio connected to an API with a blog and interactive user interface using JavaScript, React, AXIOS, HTML5, CSS',
                    imgSrc: portfolio,
                    link: 'https://ignacio-react-portfolio.herokuapp.com/',
                    code: 'https://github.com/rawfire/react-portfolio',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Note Website',
                    subTitle: 'create notes in personal page with Javascript, React, SCSS, HTML5, and Firebase as a Cloud for Data Management',
                    imgSrc: notes,
                    link: 'https://relaxed-villani-1e0866.netlify.app/',
                    code: 'https://github.com/rawfire/capstone',
                    selected: false
                }
            ]

        };

    };

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach( item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => {this.handleCardClick(item.id, e)})} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;