import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

const colors = {
  body: '#44414B',
  category: '#8B8783',
  title: '#252630',
};

const style = {
  body: {
    alignSelf: 'flex-end',
    color: colors.body,
    marginTop: 10,
  },
  category: {
    color: colors.category,
    marginTop: 10,
  },
  post: {
    borderColor: colors.title,
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 10,
    padding: 20,
  },
  thumb: {
    alignSelf: 'flex-start',
    height: 150,
    marginTop: 10,
    width: 200,
  },
  title: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 'bold',
  },
};

const Post = ({
  nid,
  title,
  body,
  category,
  imageUrl,
  articleUrl,
}) => (
  <View key={nid} style={style.post} >
    <Text style={style.title} onPress={() => Linking.openURL(articleUrl)}>
      {title}
    </Text>
    <Text style={style.body}>
      {body}
    </Text>
    <Image source={{ uri: imageUrl }} style={style.thumb} />
    <Text>
      Category: {category}
    </Text>
  </View>
);
Post.propTypes = {
  nid: React.PropTypes.number,
  title: React.PropTypes.string,
  body: React.PropTypes.string,
  category: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  articleUrl: React.PropTypes.string,
};

export default Post;
