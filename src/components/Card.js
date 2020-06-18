import React from 'react';

import CardInfo from './CardInfo';


function Card(props) {

    return(
        <div className="d-inline-block c-card" onClick={(e) => props.click(props.item)}>
            <img className="c-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} role={props.item.role} link={props.item.link} /> }
        </div>
    );

}

export default Card;