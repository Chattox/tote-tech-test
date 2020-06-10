import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';

class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    // doSearch function here is passed down from the News component that uses the Search component, so that the search term can be passed to the News component state
    return (
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        onSubmitEditing={this.props.doSearch}
        value={this.state.search}
      />
    );
  }
}

export default Search;
