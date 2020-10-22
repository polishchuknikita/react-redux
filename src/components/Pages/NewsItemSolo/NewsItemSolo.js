import React from 'react';
import {connect} from 'react-redux';
import './NewsItemSolo.css';
import TitleNews from '../TitleNews';
import SiteNews from '../SiteNews';
import DateNews from '../DateNews';

const NewsItemSolo = props => {
    const resultApiForSolo = props.news.map((item, index) => {
        item.newId = index+1;
        return item;
      })
    const newsItem =resultApiForSolo.map(item => {
        if(props.match.params.name == item.newId) {
            console.log(props.match.params.name == item.newId)
            return (
                <div className="news-page">
                    <div className="news-page__info">
                        <TitleNews 
                            class="news-page__title"
                            title={item.title}
                        />
                        <SiteNews 
                            class="news-page__site"
                            site={item.source.name}
                        />
                        <DateNews 
                            class="news-page__date"
                            day={new Date (item.publishedAt).getDate()}
                            month={new Date (item.publishedAt).getMonth()+1}
                        />
                    </div>
                    <div className="news-page__desc">
                        <div className="news-page__img">
                            <img src={item.urlToImage} alt={item.urlToImage} />
                        </div>
                        <p className="news-page__text">
                            {item.description}
                        </p>
                    </div>
                </div>
            )
        }
    });
    return (
        <section className="news-item-solo">
            <div className="container">
                {newsItem}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return state = {
      news: state.news
    };
  }

export default connect(mapStateToProps)(NewsItemSolo);