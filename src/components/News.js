import React, {Component} from 'react';
import {FlatList, View} from 'react-native';

import {getNews} from '../utils/fetchNews';
import Article from './Article';
import Search from './Search';

class News extends Component {
  state = {
    articles: [],
    searchTerm: '',
    loading: true,
  };

  componentDidMount = () => {
    this.fetchNews();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchNews(this.state.searchTerm);
    }
  };

  fetchNews = searchTerm => {
    // Fetch the news from newsAPI which returns articles as a JSON object.
    // Add these articles to the articles prop in state and set loading to false.
    getNews(searchTerm)
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

  doSearch = search => {
    this.setState({searchTerm: search.nativeEvent.text});
  };

  render() {
    return (
      <View>
        <Search doSearch={this.doSearch} />
        {
          // Return FlatList component which will create a scrollable list of article cards
        }
        <FlatList
          data={this.state.articles}
          renderItem={({item}) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.loading}
          onRefresh={this.handleRefresh}
          style={{backgroundColor: '#3c4042'}}
        />
      </View>
    );
  }
}

export default News;
