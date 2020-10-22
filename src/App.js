import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Contacts from './components/Pages/Contacts/Contacts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import News from './components/Pages/News/News';
import Main from './components/Pages/Main/Main';
import NewsItemSolo from './components/Pages/NewsItemSolo/NewsItemSolo';

const useFetch = () => {
  const [data, updateData] = useState([]);
  const urlApi = 'http://newsapi.org/v2/top-headlines?country=ua&apiKey=618a0a83e4a7468d8f47abb7abe2efc5';
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(urlApi);
      updateData(response.data.articles);
    }
    fetchData();
  }, [])
  return data;
}

const App = props => {
  const apiState = useFetch();
  const newIdNews = apiState.map((item, index) => {
    item.newId = index + 1;
    return item;
  })
  
  const newDispatch = (value, id) => {
    props.onPageLoad(value, id);
  }

  newDispatch(apiState, newIdNews);


  
  return (
    <div className="diploma-redux">
      <Header />
      <Route 
        path="/"
        exact
        component={Main}
      />
      <Route 
        path="/News"
        exact
        component={News}
      />
      <Route 
        path="/Contacts"
        exact
        component={Contacts}
      />
      <Route 
        path="/News/:name"
        exact
        component={NewsItemSolo}
      />
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return state = {
    news: state.news
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onPageLoad: (apiNews, apiNewId) => {
      dispatch({type:'page load', news: apiNews, newId: apiNewId});
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
