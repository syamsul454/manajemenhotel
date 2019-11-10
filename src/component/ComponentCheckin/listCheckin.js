import React, { Component } from "react"
import {
  View,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import {Grid, Col, Text} from "native-base"
import CountDown from 'react-native-countdown-component'
import {getCheckin,checkout} from '../../Redux/_action/checkin'
import { getCustomer} from '../../Redux/_action/customer'
import { getRoom, addRoom } from '../../Redux/_action/room'
class List extends Component {
 
render() {
  return (
    this.props.booked == true ?
    <TouchableOpacity onPress = {this.props.register} >
    <View style = {styles.box }>
    <Text style = {styles.RoomTitle} > {this.props.name} </Text>
    <CountDown style = {styles.bb}
       until={this.props.durasi}
       size={10}
       onFinish={this.props.Checkout}
       digitStyle={{backgroundColor: '#FFF'}}
       digitTxtStyle={{color: '#1CC625'}}
       timeToShow={['M', 'S']}
     />
    </View>
    </TouchableOpacity> :
  <TouchableOpacity onPress = {this.props.register} >
  <View style = {styles.active}>
  <Text style = {styles.RoomTitle} > {this.props.name} </Text>
  </View>
  </TouchableOpacity>
    );
}
}

const styles = StyleSheet.create({
  box : {
            backgroundColor: 'grey',
            height: 100,
            width: 100,
            borderRadius: 8,
            margin: 8,

          },
  active : {
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

    bb : {

        marginTop: -40
    }


})

export default List
