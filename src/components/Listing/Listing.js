import React from 'react';

function Listing(props) {
    return (
        <div>
            <li key={props.index}>
                <h2>Titles: {props.article.title}</h2>
                <p>Author: {props.article.author}</p>
                <p>Date Created: {props.article.created_at}</p>
            </li>
        </div>
    )
}

export default Listing
