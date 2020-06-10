import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Linking} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';
import moment from 'moment';

// const defaultJSONData = {
//   source: {
//     id: null,
//     name: 'Theguardian.comworld',
//   },
//   author: 'Aamna Mohdin',
//   title:
//     'Protesters rally in Oxford for removal of Cecil Rhodes statue - The Guardian',
//   description:
//     'Campaigners and Black Lives Matter protesters block road outside Oriel College',
//   url:
//     'https://amp.theguardian.comworld/2020/jun/09/protesters-rally-in-oxford-for-removal-of-cecil-rhodes-statue',
//   urlToImage:
//     'https://i.guim.co.uk/img/media/9da4c25baa3868d772f55c462970d521bb94aaf1/0_400_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=025527c05cd167406426d891f3b234f0',
//   publishedAt: '2020-06-09T18:23:43Z',
//   content:
//     'More than a thousand protesters have gathered outside Oxford University to demand the removal of a statue of the Victorian imperialist Cecil Rhodes.\r\nBlocking the road outside Oriel College, the Rhod… [+4130 chars]',
// };

class Article extends Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url,
    } = this.props.article;

    const time = moment(publishedAt || moment.now()).fromNow();

    // Given the correct article object, create and return a card object using the properties provided

    return (
      <TouchableHighlight
        onPress={() => {
          Linking.openURL(url);
        }}>
        <Card
          featuredTitle={title}
          featuredTitleStyle={styles.featuredTitle}
          image={{uri: urlToImage}}>
          <Text style={styles.descriptionText}>
            {description || 'Read more...'}
          </Text>
          <Divider style={styles.divider} />
          <View style={styles.bottomText}>
            <Text style={styles.sourceText}>{source.name.toUpperCase()}</Text>

            <Text style={styles.timeText}>{time}</Text>
          </View>
        </Card>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  featuredTitle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 3,
  },
  descriptionText: {
    marginBottom: 10,
  },
  divider: {
    backgroundColor: '#dfe6e9',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sourceText: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
  },
  timeText: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
  },
});

export default Article;
