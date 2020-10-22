import React from 'react';

const TitleNews = props => {
    return (
        <h3 className={props.class}>
            {props.title}
        </h3>
    )
}

export default TitleNews;