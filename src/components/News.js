import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import {getNews} from '../utils/fetchNews';
import Article from './Article';
import Search from './Search';

class News extends Component {
  state = {
    articles: [],
    searchTerm: '',
    page: 1,
    loading: true,
  };

  componentDidMount = () => {
    this.fetchNews();
  };

  componentDidUpdate = (prevProps, prevState) => {
    // If the search term changes, call the news API again with updated search term to return relevant articles
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.fetchNews(this.state.searchTerm);
    }
    if (prevState.page < this.state.page) {
      getNews(this.state.searchTerm, this.state.page).then(articles => {
        this.setState({
          articles: this.state.articles.concat(articles),
        });
      });
    }
  };

  fetchNews = searchTerm => {
    // Fetch the news from newsAPI which returns articles as a JSON object.
    // Add these articles to the articles prop in state and set loading to false.
    getNews(searchTerm, this.state.page)
      .then(articles => {
        this.setState({articles, loading: false});
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

  loadMoreNews = () => {
    this.setState({page: this.state.page + 1});
  };

  handleRefresh = () => {
    // Basically run the initial setup again to fetch new articles
    this.setState({loading: true}, () => this.fetchNews());
  };

  doSearch = search => {
    this.setState({searchTerm: search.nativeEvent.text, page: 1});
  };

  render() {
    if (this.state.articles.length === 0 && this.state.loading === false) {
      return (
        <View>
          <Search doSearch={this.doSearch} />
          <Text style={styles.noResults}>
            Unfortunately, there were no results for this search term
          </Text>
        </View>
      );
    }
    return (
      <View>
        {
          // Return FlatList component which will create a scrollable list of article cards
          // Search bar in the header, 'load more' button in the footer
        }
        <FlatList
          ListHeaderComponent={<Search doSearch={this.doSearch} />}
          data={this.state.articles}
          renderItem={({item}) => <Article article={item} />}
          ListFooterComponent={
            <Button title="Load more" onPress={this.loadMoreNews} />
          }
          keyExtractor={item => item.url}
          refreshing={this.state.loading}
          onRefresh={this.handleRefresh}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#3c4042',
  },
  noResults: {
    textAlign: 'center',
    paddingTop: 20,
  },
});

export default News;
