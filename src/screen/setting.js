import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Container,Content, Text, Item, Input, Button } from 'native-base';
import Header from '../component/Header/headerSetting'
import Footer from '../component/Footer/footer'
import Icon from 'react-native-vector-icons/AntDesign'

class Setting extends Component {
  render() {
    return (
      <Container>

      <Header title = {'SETTING'} />
      <Content>
      <View style={styles.container}>
          <Image style = {styles.image} source = {{uri:'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png'}}  />

            <View style = {styles.profil}>
            <Text style= {styles.text} > hello </Text>
            <Text style= {styles.text} > syamsul </Text>
             </View>

             <View style = {styles.logout}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
               <Icon style = {styles.icon} type = "AntDesign" name="poweroff" />
              </TouchableOpacity>
            </View>

      </View>

      <Image
       style={styles.logo}
       source={require ('../asset/lombok.png')}
     />
      </Content>
      <Footer navigation = {this.props.navigation} active = {'#00b3b3'} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 300,
    backgroundColor: '#00b3b3',
    borderBottomLeftRadius: 180,
    flexDirection: 'column'
  },

  logo : {
    width: 200,
    height: 150
  },

  image : {
    width: 150,
    height: 150,
    position: 'absolute'
  },
  profil : {
    marginLeft: 160,
    marginTop: 50,
    flexDirection: 'column'
  },

  text : {
      fontSize: 20,
      color: '#fff'
  },
  logout : {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'yellow',
    position: 'absolute',
    marginLeft: 230,
    marginTop: 190,
  },

  icon : {
    fontSize: 50,
    color: '#00b3b3',
    lineHeight: 100,
    alignSelf: 'center'


  }
});

export default Setting
