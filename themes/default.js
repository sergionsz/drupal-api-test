import { Dimensions, StyleSheet } from 'react-native';

const colors = {
  postBody: '#44414B',
  postCategory: '#8B8783',
  postTitle: '#252630',
  postBg: '#F5F5F5',
};

const viewport = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const thumbHeight = 100;
/* Images from server have a size ratio of 1:3/4 (eg. width: 100, height: 75)*/
const thumbWidth = (thumbHeight / 3) * 4;
const boxPadding = 20;

const styles = StyleSheet.create({
  postBody: {
    color: colors.postBody,
  },
  postCategory: {
    color: colors.postCategory,
    marginTop: 10,
    textAlign: 'right',
  },
  postBox: {
    backgroundColor: colors.postBg,
    borderColor: colors.postTitle,
    borderStyle: 'solid',
    elevation: 3,
    margin: 7,
    padding: 20,
  },
  postThumb: {
    alignSelf: 'flex-end',
    height: thumbHeight,
    position: 'absolute',
    right: boxPadding,
    top: boxPadding,
    width: thumbWidth,
  },
  postTitle: {
    color: colors.postTitle,
    fontSize: 25,
    fontWeight: '200',
    marginBottom: thumbHeight / 2,
    width: viewport.width * 0.5,
  },
});

export default styles;
