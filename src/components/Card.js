import React from 'react';
import styled from 'styled-components/macro';

function Card({ variant, img, alt, heading, description}) {
    return (
        <div>
            <img src={img} alt={alt}/>
            <div>
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;
