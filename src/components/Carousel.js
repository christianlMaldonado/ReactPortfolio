import React from 'react';

import Card from './Card';

// imprt images from assets to carousel
import logo from '../assets/images/logo.jpg';
import image1 from '../assets/images/image1.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
                    link: 'https://www.linkedin.com/in/christian-maldonado-73baa0196/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: image1,
                    link: '/',
                    selected: false
                },
                // {
                //     id: 2,
                //     title: 'LinkedIn',
                //     subTitle: 'My LinkedIn Profile ',
                //     imgSrc: image1,
                //     link: '/https://www.linkedin.com/in/christian-maldonado-73baa0196/',
                //     selected: false
                // }
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