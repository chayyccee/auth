import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class Index extends Component {
    componentDidMount() {
        
    }
    render() {
        return(
            <View>
                <Header headerText="Authentication" />
                <Text>An App!!!!</Text>
            </View>
        );
    }
}

export default Index;
