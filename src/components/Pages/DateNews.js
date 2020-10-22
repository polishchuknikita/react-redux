import React from 'react';
import {connect} from 'react-redux';


const DateNews = props => {
    return (
        <time className={props.class} dateTime={props.date}>
            <span className="date-span">{props.day}</span><span className="span">/</span><span className="month-span">{props.month}</span>
        </time>
    )
}

const mapStateToProps = state => {
    return state = {
      news: state.news
    };
  }

export default connect(mapStateToProps)(DateNews);