import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div> 
            <Hero title={props.title} /> 
            
            <Content>
            <p> 
                Hello my name is Christian Maldonado. 
            </p> 

            <p> 
                I have graduated from Monterey Peninsula College acheieving critical computer science fundementals, 
                learning discrete mathmatics and taking a UC Berkeley coding boot camp to prepare me into becoming a full stack developer.
            </p>

            <p> 
                What I have learned over the course of pursuing higher education in the computer science field is to always be ready to learn new technologies, research ongoing
                trends and adapt quickly. These are just some of the technologies I use everyday: 
            </p>

            <p>
                Languages: HTML5, CSS3, JavaScript, C++, Node.Js, MongoDb, MySql, React.Js.
            </p> 
            
            <p> 
                Applications: VsCode, Github, Firebase, Heroku, Postman.
            </p>
            
            <p>  
                I am always eager to research and learn new ways to imrove and clean my code.
            </p>
            
            <a href="https://www.linkedin.com/in/christian-maldonado-73baa0196/"> Visit my LinkedIn </a>
            <br /> 
            <a href="https://github.com/christianlMaldonado"> Visit my GitHub </a>
                
            </Content>
        </div>
    );

}

export default AboutPage;