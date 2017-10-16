import React, { Component } from 'react';
import { 
    AppRegistry, 
    Text, 
    View, 
    List, 
    FlatList, 
    StyleSheet 
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true,
            data: []
        };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={[styles.title]}> { display } </Text>
        );
    }
}

export default class BlinkApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
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
                    data: res
                })
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };
    render() {
    let title = this.state.data.title;
    let body = this.state.data.body;
    let id = this.state.data.userId;
    return (
        <View style={styles.container}>
            <Blink text={`id: ${id}`} />
            <Blink text={`title: ${title}`} />
            <Blink text={`description: ${body}`} />
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 15
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    margin: 5
  }
});