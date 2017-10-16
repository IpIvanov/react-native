import React, { Component } from 'react';
import { AppRegistry, Text, View, List, FlatList } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      data : []
    };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    // const { page, seed } = this.state;
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    // this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res]
        })
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  render() {
    let ime = this.state.data
    // let display = this.state.showText ? this.props.text : ' ';
    return (
      
      <Text>
        {this.state.data}
      </Text>
  
    );
  }
}

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         {/* <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' /> */}
//       </View>
//     );
//   }
// }
