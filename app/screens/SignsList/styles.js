import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  innerContainer: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flatList: {
    alignSelf: 'stretch'
  },
  img: {
    width: 70,
    height: 70
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#696969'
  }
});
