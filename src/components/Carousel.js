import React from 'react';

import Card from './Card';

// import images from assets to carousel
import logo from '../assets/images/logo.jpg';
import linkedInImage from '../assets/images/linkedInImage.png';
import panoptic from '../assets/images/panoptic.png';
import Coalesce from '../assets/images/Coalesce.png';
import BitAcademy from '../assets/images/BitAcademy.png';
import EatDaBurger from '../assets/images/EatDaBurger.png';
import FriendFinder from '../assets/images/FriendFinder.png';
import clickygame from '../assets/images/clickygame.png'

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
                    title: 'BitAcademy',
                    subTitle: 'Education App || Node.js, React.js, Javascript, Heroku, Socket.io',
                    role: 'Role || Full Stack',
                    imgSrc: BitAcademy,
                    link: 'https://bit-academy.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Coalesce',
                    subTitle: 'Food App || Node.js, Javascript, Bootstrap, Heroku, Yelp API, MySql',
                    role: 'Role || Full Stack',
                    imgSrc: Coalesce,
                    link: 'https://arcane-woodland-29279.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Panoptic',
                    subTitle: 'Music App || Javascript, Bootstrap, BandsInTown API, Youtube API',
                    role: 'Role || Full Stack',
                    imgSrc: panoptic,
                    link: 'https://github.com/mbayers6370/Project-1',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Friend Finder',
                    subTitle: 'Dating App || Javascript, Bootstrap, Heroku, OOP',
                    role: 'Role || Full Stack',
                    imgSrc: FriendFinder,
                    link: 'https://fathomless-stream-10422.herokuapp.com/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Eat Da Burger',
                    subTitle: 'Burger App || CRUD Method with Node.js, Heroku, MongoDB',
                    role: 'Role || Full Stack',
                    imgSrc: EatDaBurger,
                    link: 'https://still-shore-88627.herokuapp.com/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'React clicky game',
                    subTitle: 'Clicky Game" ',
                    role: 'Role || Full Stack',
                    imgSrc: clickygame,
                    link: 'https://github.com/christianlMaldonado/hw15ClickyGame',
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