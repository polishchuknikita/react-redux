import React from 'react';
import './News.css';
import NewsItem from './NewsItem';
import TitleNews from '../TitleNews';
import SiteNews from '../SiteNews';
import DateNews from '../DateNews';
import {connect} from 'react-redux';

const News = props => {
    const allNewsPage = props.news.map((item, index) => {
        return (
          <NewsItem 
            key={index}
            titlePost={<TitleNews
              title={item.title}
              class='news-title all-news-list__title'
            />}
            text={<SiteNews
              site={item.source.name}
              class="site-news all-news-list__site"
            />}
            datePost={<DateNews
              class="date-time date-time_allNews"
              day={new Date (item.publishedAt).getDate()}
              month={new Date (item.publishedAt).getMonth()+1}
            />}
            name={item.newId}
          />
        )
      })

      return (
        <section className="all-news">
            <div className="container">
                <h2 className="all-news-title">
                    <span className="d-b">Быть </span>в курсе всех <span className="blue">событий</span>
                </h2>
                <ul className="all-news-list">
                    {allNewsPage}
                </ul>
            </div>
        </section>
      )
    }
    


const mapStateToProps = state => {
  return state = {
    news: state.news
  };
}


export default connect(mapStateToProps)(News);


