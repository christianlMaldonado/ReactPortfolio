import React from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/Col';

function Footer()  {

    return(
        <footer className="mt=5"> 
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3"> 
                    <Col className="p-0" sd={12}>
                        Christain Maldonado
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Christian Maldonado
                    </Col>
                </Row>    
            </Container>         
        </footer>
    );

}

export default Footer;