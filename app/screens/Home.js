import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight
} from 'react-native';
import { colors } from '../config/styles';
import { signs } from '../config/signs';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#FFFFFF'
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleRowPress = (item) => {
    this.props.navigation.navigate('Profile', {
      name: item.name
    });
  };

  _renderItem = ({ item }) => {
    return (
      <TouchableHighlight underlayColor="white" activeOpacity={0.8} onPress={() => this.handleRowPress(item)}>
        <View style={{
          elevation: 1,
          borderRadius: 2,
          flex: 1,
          flexDirection: 'row',  // main axis
          justifyContent: 'flex-start', // main axis
          alignItems: 'center', // cross axis
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 18,
          paddingRight: 16,
          marginLeft: 14,
          marginRight: 14,
          marginTop: 0,
          marginBottom: 6,
        }}>
          <Image style={{width: 70, height: 70}} source={item.img}/>
          <View style={{
            flex: 1,
            flexDirection: 'column',  // main axis
            justifyContent: 'flex-start', // main axis
            alignItems: 'center', // cross axis
          }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontFamily: 'Roboto', fontSize: 12, color: colors.dimmedText }}>{item.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={signs}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.name}
          style={{alignSelf: "stretch",  backgroundColor: '#FFFFFF'}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;

