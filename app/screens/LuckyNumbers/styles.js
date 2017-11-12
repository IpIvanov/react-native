import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    elevation: 1,
    borderRadius: 2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
    margin: 14,
    backgroundColor: '#fff'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  numbers: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#aa3300',
    textAlign: 'center'
  },
  dateText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#aa3300',
    textAlign: 'center',
    height: 60,
    paddingBottom: 5,
    marginBottom: 20
  }
});
