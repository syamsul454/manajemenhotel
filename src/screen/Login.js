import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import { Container,Content,Text, Form, Label,Item, Input , Button} from "native-base"
import axios from 'axios';
import { connect } from 'react-redux';
import { getUsers, } from '../Redux/_action/user'
import FormLogin from '../component/ComponentLogin/form'
import CountDown from 'react-native-countdown-component'
              
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''

        };
      }

    user = user => {
    this.setState({
        username : user
    })
    }

    password = pass => {
        this.setState ({
            password : pass
        })
    }

    login = () => {
      this.props.navigation.navigate('customer')
        // var postData = {
        //     name:  this.state.username,
        //     password: this.state.password
        //   };
        //   axios.post('http://192.168.137.1:5000/api/v2/login', postData,)
        //   .then((res) => {

        //     if (res) {

        //         const token = res.data['token']
        //         const message = res.data['message']
        //         const name = res.data['name']
        //       if (message === 'Success Sign In') {
        //         this.props.dispatch(getUsers(token, name))
        //         this.props.navigation.navigate('customer')
        //       } else {
        //         alert('Login Gagal')
        //       }

        //     } else {

        //     }
        //   })
        }
    render() {

        return (

        <Container>
      <Content padder>
          <View style = {{flex:1}}>
            <Image
              style={styles.logo}
              source={require ('../asset/lombok.png')}
              />
            <Text style = {styles.logoName}>Bale Hotel </Text>
          </View>
          <View >
          <FormLogin name = {this.user} password = {this.password} register = {this.login} />
          </View>
           
          </Content>
        </Container>
        );
    }
    }

    const mapStateToProps = (state) => {
        return {
            token : state.user
        }
      }

    const styles = StyleSheet.create({
          logo : {
            width: 200,
            height: 140,
            marginLeft: 50,
            marginTop: 20
          },
          logoName: {
            fontSize: 60,
            textAlign : 'center',
            fontFamily:'Lobster-Regular',
            color: '#00b386'
          }
    })
      export default connect(
        mapStateToProps
      )( Login);
