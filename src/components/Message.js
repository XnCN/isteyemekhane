import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Layout } from 'react-native-ui-kitten';

class Message extends Component {
    render() {
        return (
            <Layout level='2' style={styles.MessageBox}>
                <ImageBackground source={require('../assets/images/messageBg.png')} style={{ width: '100%', height: 100 }}>
                </ImageBackground>
            </Layout>
        )
    }
}
const styles = StyleSheet.create({
    MessageBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f2f2f2',
        borderBottomWidth: 1
    }
});

export default Message;