import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import theme from '../themes/default';

/**
 * Post component
 * @param {Number} nid        ID of the post
 * @param {String} title      The title of the article
 * @param {String} body       The contents of the article
 * @param {String} category   Category for the article
 * @param {String} imageUrl   URL for an image
 * @param {String} articleUrl URL of the page of the article
 */
const Post = ({
  nid,
  title,
  body,
  category,
  imageUrl,
  articleUrl,
}) => (
  <View key={nid} style={theme.postBox} >
    <Text>
      {category}
    </Text>
    <TouchableOpacity activeOpacity={0.5} onPress={() => Linking.openURL(articleUrl)}>
      <Text style={theme.postTitle}>
        {title}
      </Text>
    </TouchableOpacity>
    <Image source={{ uri: imageUrl }} style={theme.postThumb} />
    <Text style={theme.postBody}>
      {body}
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
