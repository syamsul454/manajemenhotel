import React, { Component } from "react"
import {
    StyleSheet,
  } from 'react-native';
import { 
      Card,
      Text, 
      Form, 
      Label,
      Item, 
      Input,
      Button
    } from "native-base"
import Icon from 'react-native-vector-icons/AntDesign'

class formLogin extends Component {
render() {
  return (
      <Card style = {styles.card} >
          <Form>
          <Item style= {styles.input}>
            <Label style = {styles.label}> Username</Label>
            <Input style = {{backgroundColor: '#00997a', color: '#fff', marginTop: 80, marginLeft: -80, width: 10,}} onChangeText = {this.props.name} />
          </Item>
          <Item style= {styles.input1}>
            <Label style = {styles.label} >Password</Label>
            <Input style = {{backgroundColor: '#00997a', color: '#fff', marginTop: 80, marginLeft: -71, width: 10}}  onChangeText = {this.props.password} />
          </Item>
        </Form>
        <Button style={styles.bottomLogin} onPress = {this.props.register} >
          <Text style= {styles.textLogin}> LOGIN </Text>
        </Button>
      </Card>
    );
}
}





const styles = StyleSheet.create({
    card : {
          backgroundColor: '#00b386',
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
          width: 340,
          marginTop: 30,
          marginRight: 5,
          marginBottom: -2,
          marginBottom: 0,
    },

    label : {
          color: '#fff',
          fontFamily: 'ZCOOLXiaoWei-Regular'
    },
    item : {
          borderWidth: 0,
          color: '#fff',


    },

    input : {
          width: 310,
          marginTop: 5,
          fontFamily: 'ZCOOLXiaoWei-Regular',
          borderBottomWidth: 0,
          color: '#fff',
         

    },

    input1 : {
          width: 310,
          marginTop: -30,
          fontFamily: 'ZCOOLXiaoWei-Regular',
          borderBottomWidth: 0,
          color: '#fff'

    },

    bottomLogin : {
         width: 150,
         marginLeft: 100,
         backgroundColor: '#00997a',
         marginTop: 10,
         marginBottom: 10,
         borderRadius: 10,
    },

    textLogin : {
          alignSelf: 'center',
          marginLeft: 30,
          color: '#fff',


    }




})

export default formLogin
