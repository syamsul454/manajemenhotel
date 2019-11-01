import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {StyleSheet} from 'react-native'
class footer extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Footer style= {styles.foter}>
          <FooterTab style = {styles.foter}>
            <Button style = {{backgroundColor: this.props.active1}} vertical  onPress={() => this.props.navigation.navigate('checkin')}>
              <Icon type = "AntDesign" name="checkcircle" />
              <Text style = {styles.iconTitle}>Checkin</Text>
            </Button>
            <Button style = {{backgroundColor: this.props.active2}} vertical onPress={() => this.props.navigation.navigate('room')}>
              <Icon type="FontAwesome" name="bed" />
              <Text style = {styles.iconTitle}>Room</Text>
            </Button>
            <Button style = {{backgroundColor: this.props.active3}} vertical onPress = {() => this.props.navigation.navigate('customer')}>
              <Icon type = "AntDesign" name="idcard" />
              <Text style = {styles.iconTitle}>Customer</Text>
            </Button>
            <Button style = {{backgroundColor: this.props.active}} vertical onPress = {()=> this.props.navigation.navigate('setting')} >
              <Icon type="AntDesign" name="setting" />
              <Text style = {styles.iconTitle} >Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
            foter : {
                    backgroundColor: '#00997a'
                  },
            active : {
                    backgroundColor: '#fff'
            },

         iconTitle : {
                  fontSize: 10
            }

})


export default footer
