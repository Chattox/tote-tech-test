import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';

class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  doSearch = search => {
    console.log(search.nativeEvent.text);
  };

  render() {
    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSubmitEditing={this.doSearch}
        value={this.state.search}
      />
    );
  }
}

export default Search;
