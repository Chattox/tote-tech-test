import React, {Component} from 'react';
import {FlatList} from 'react-native';

import {getGBNews} from '../utils/fetchNews';
import Article from './Article';

class News extends Component {
  state = {
    articles: [],
    loading: true,
  };

  componentDidMount = () => {
    this.fetchNews();
  };

  fetchNews = () => {
    // Fetch the news from newsAPI which returns articles as a JSON object.
    // Add these articles to the articles prop in state and set loading to false.
    getGBNews()
      .then(articles => {
        this.setState({articles, loading: false});
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

  handleRefresh = () => {
    // Basically run the initial setup again to fetch new articles
    this.setState({loading: true}, () => this.fetchNews());
  };

  render() {
    return (
      // Return FlatList component which will create a scrollable list of article cards
      <FlatList
        data={this.state.articles}
        renderItem={({item}) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.loading}
        onRefresh={this.handleRefresh}
      />
    );
  }
}

export default News;
