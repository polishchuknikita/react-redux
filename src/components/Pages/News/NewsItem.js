import React from 'react';
import './News.css';
import {withRouter} from 'react-router-dom';

const NewsItem = props => {
    return (
        <li className="all-news-list__item" onClick={()=> {
            props.history.push('/News/' + props.name)
        }}>
            {props.titlePost}
            <div className="all-news-list__date-wrap">
                {props.text}
            <span className="all-news-list__date">
                {props.datePost}
            </span>
            </div>
        </li>
               
    )
}

export default withRouter(NewsItem);