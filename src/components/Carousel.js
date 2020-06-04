import React from 'react';

import Card from './Card';

// import images from assets to carousel
import logo from '../assets/images/logo.jpg';
import linkedInImage from '../assets/images/linkedInImage.png';
import panoptic from '../assets/images/panoptic.png';
import Coalesce from '../assets/images/Coalesce.png';
import BitAcademy from '../assets/images/BitAcademy.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Adds the images into the cards of the carousel
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Github',
                    subTitle: 'GitHub Portfolio',
                    imgSrc: logo,
                    link: 'https://github.com/christianlMaldonado',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: linkedInImage,
                    link: 'https://www.linkedin.com/in/christian-maldonado-73baa0196',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Panoptic',
                    subTitle: 'Panoptic is an app that lets users get vital Music artist information all for free',
                    imgSrc: panoptic,
                    link: 'https://github.com/mbayers6370/Project-1',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Coalesce',
                    subTitle: 'Coalesce is an application to help you decide what type of food you would like to dine in or take out',
                    imgSrc: Coalesce,
                    link: 'https://arcane-woodland-29279.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'BitAcademy',
                    subTitle: 'Bit Academy is an education app designed for students connecting with teachers',
                    imgSrc: BitAcademy,
                    link: 'https://arcane-snowlands.herokuapp.com/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
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