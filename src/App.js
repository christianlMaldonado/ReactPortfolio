import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Christian Maldonado Developr Portfolio",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        // { title: "contact", path: "/contact" },
      ],
      home: {
        title: "Home",
        subtitle: "My portfolio made in React",
        text: "Checkout my projects below",
      },
      about: {
        title: "About me",
      },
      // contact: {
      //   title: "Let's Talk",
      // },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          {/* --- NAVBAR ---   */}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Chirstian Maldonado Developer Portfolio</Navbar.Brand>

            {/* --- Collapseable Navbar (Mobile) ---  */}
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml=auto">
                
                <Link className="nav-link" to="/">
                  Home
                </Link>
                
                <Navbar.Brand>  </Navbar.Brand>

                <Link className="nav-link" to="/about">
                  About
                </Link>

                <Navbar.Brand> </Navbar.Brand>

                <Navbar.Text>
                  <a href="https://github.com/christianlMaldonado">GitHub </a>
                </Navbar.Text>
                
                <Navbar.Brand>  </Navbar.Brand>
                
                <Navbar.Text>
                  <a href="https://www.linkedin.com/in/christian-maldonado-73baa0196/">LinkedIn</a>
                </Navbar.Text>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* change */}
          {/* creating a route and exact routes of the portfolio site */}
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subtitle={this.state.home.subtitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => <AboutPage title={this.state.about.title} />}
            />
            {/* <Route
              path="/contact"
              exact
              render={() => <ContactPage title={this.state.contact.title} />}
            /> */}
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
