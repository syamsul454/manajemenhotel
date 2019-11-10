import React, { Component } from "react"
import { connect } from 'react-redux'
import {
  View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import {Grid, Col, Text} from "native-base"
class ListRoom extends Component {
render() {
  return (
        <TouchableOpacity onPress = {this.props.edit} >
        <View style = {styles.box}>
        <Text style = {styles.RoomTitle} > {this.props.name} </Text>
        </View>
        </TouchableOpacity>
      );
}
}

const styles = StyleSheet.create({
  box : {
            backgroundColor: '#635DB7',
            height: 100,
            width: 100,
            borderRadius: 8,
            margin: 8,

          },
  RoomTitle : {
            alignItems: 'center',
            alignSelf: 'center',
            color: '#fff',
            lineHeight: 100,
          },
  grid    : {
            width: 350,
            marginLeft: 5,
            flexDirection: 'row-reverse',
            flex: 1
          },


})

export default ListRoom
