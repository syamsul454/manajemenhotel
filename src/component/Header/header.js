import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
  } from 'react-native';
import { Container, Header, Content, Footer, Body, FooterTab, Button,Text, Grid,Title, Right} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

class HeaderCheckin extends Component {

  render() {
    return (
      <Header style = {styles.header}>
        <Body>
          <Title style = {styles.titleHeader}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress = {this.props.button}>
            <Icon style = {styles.icon}  name='plus' />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header : {
            backgroundColor: '#00997a',
            color: '#fff'
          },
  titleHeader : {
                color: '#fff',
                textAlign: 'center',
              },
    icon      : {
              color: '#fff',
              fontSize: 30,
              }
})

export default  HeaderCheckin
