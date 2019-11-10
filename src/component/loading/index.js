import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators'


class loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View  style = {styles.loading} >
        <SkypeIndicator fontSize = '20'  color='green' />
        <Text>Mohon Menunggu </Text>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    loading : {

        alignContent: 'center',
        alignSelf:'center',
        marginTop: 220,
        fontFamily: 'Lobster-Regular',
        zIndex: 12,
        position: 'absolute'
  },
  img : {
    width: 100,
    height: 100
  }
});

export default loading;
