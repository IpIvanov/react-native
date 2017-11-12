import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    padding: 8,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingVertical: -20
  },
  innerContainer: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 8
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginBottom: 10
  },
  info: {
    fontFamily: 'Roboto',
    fontSize: 14
  }
});
