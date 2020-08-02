import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from './Button';



export const Card = (props) => (

    <div className="col mb-4">
        <div className="card">
            <h5 className="card-header">{props.post.title}</h5>
            <img src={props.post.image} className="card-img-top" alt={props.post.title} />
            <div className="card-body">
                <p className="card-text">{props.post.body}</p>
            </div>
        </div>
    </div>

);