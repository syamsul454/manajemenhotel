import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import { Container, Button,Text, Grid, Col, Content, Item, Input } from 'native-base'

import Header from '../component/Header/header'
import Footer from '../component/Footer/footer'
import ListCustomer from '../component/ComponentCustomer/listCustomer'
import { connect } from 'react-redux'
import {getCustomer,postCustomer,editCustomer} from '../Redux/_action/customer'

import Modal from 'react-native-modalbox'
import Slider from 'react-native-slider'
import Icon from 'react-native-vector-icons/AntDesign'
import Loading from '../component/loading'


      class Customer extends Component {
        constructor() {
           super();
           this.state = {
             isOpen: false,
             isDisabled: false,
             swipeToClose: true,
             sliderValue: 0.3,
             name:'',
             idCustomer: '',
             phone: '',
             id: '',
             nameCustomer:'',
             phoneCustomer:'',
             IdCustomer:'',
           };
         }

         onClose() {
           console.log('Modal just closed');
         }

         onOpen() {
           console.log('Modal just opened');
         }

         onClosingState(state) {
           console.log('the open/close of the swipeToClose just changed');
         }

         renderList() {
           var list = [];

           for (var i=0;i<50;i++) {
             list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
           }

           return list;
         }
      // ---------------
      name = (name) => {
      this.setState({
        name: name,
        nameCustomer: name
      })
      }

      idCustomer = (idCustomer) => {
        this.setState({
          idCustomer: idCustomer,
          IdCustomer: idCustomer
        })
      }

      phone = (phone) => {
        this.setState({
          phone:phone,
          phoneCustomer:phone
        })
      }

      editCustomer = (id, name, idCustomer, phoneNumber) => {
        var pp = phoneNumber.toString()

        this.setState({
          id :id,
          nameCustomer:name,
          IdCustomer:idCustomer,
          phoneCustomer:pp,
        })

      this.refs.modal4.open()

      }

      update =  (id) => {
        let postData = {
          name : this.state.nameCustomer,
          idCustomer : this.state.IdCustomer,
          phoneNumber : this.state.phoneCustomer
        }
           this.props.dispatch(editCustomer(id,postData))
          this.props.dispatch(getCustomer())
          this.refs.modal4.close()
          alert('success')
          
      }
      registrasi = () => {
        let postData = {
          name : this.state.name,
          idCustomer : this.state.idCustomer,
          phoneNumber : this.state.phone
        }
          this.props.dispatch(postCustomer(postData))
          this.props.dispatch(getCustomer())
           this.refs.modal3.close()
          

      }
        componentDidMount(){
          this.props.dispatch(getCustomer())

        }
        render() {
          return (
            <Container>
            <Header title = {'CUSTOMER'} button = {() => this.refs.modal3.open()} />
                <Content>
                {this.props.customer.isLoading === false ? null : <Loading /> }
                <FlatList
                data={this.props.customer.DataCustomer}
                renderItem={({ item }) => (
                       
                    <ListCustomer name = {item.name} idCustomer = {item.idCustomer} phone = {item.phoneNumber}
                    edit = {() => this.editCustomer(item.id,item.name, item.idCustomer, item.phoneNumber)}
                     />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  onRefresh= {() => this.componentDidMount()}
                  refreshing= {false}
                  />
                </Content>
             

          <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <View style= {styles.formAdd}>

                <Text style = {styles.text} > Add Customer</Text>
           <View style = {{marginLeft: 10,}}> 
            <Item style = {{backgroundColor: '#fff', width:265, marginLeft:5 }} >
              <Icon style= {{fontSize: 25}} type="FontAwesome" name="user" />
              <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft:7 }} onChangeText ={this.name} placeholder='Name..' />
            </Item>

            <Item style = {{backgroundColor: '#fff', width:265, marginTop:10, marginLeft: 5}} >
              <Icon style= {{fontSize: 25, marginLeft: 1}} type="FontAwesome" name="idcard" />
              <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft: 7 }}  onChangeText ={this.idCustomer} placeholder='idCustomer..' />
            </Item>

            <Item style = {{backgroundColor: '#fff', width:265, marginTop:10, marginLeft: 5}} >
              <Icon style= {{fontSize: 25}} type="FontAwesome" name="mobile1" />
              <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft:7 }} onChangeText ={this.phone} placeholder='PhoneNumber..' />
            </Item>
          </View>

            <View style= {{flexDirection: 'row', width: 260, alignSelf: 'center', marginLeft: 35, marginTop: 10}}>
              <Button onPress = {this.registrasi}  style= {{marginTop: 5, width: 100}} >
                <Text style = {{fontSize:15, marginLeft:2, fontFamily: 'ZCOOLXiaoWei-Regular'}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="save" /> SAVE</Text>
              </Button>
              <Button onPress = {() => this.refs.modal3.close()}  style= {{marginTop: 5, marginLeft:5, backgroundColor: 'red', width: 120}} >
                <Text style = {{fontSize: 15,marginLeft: 4, fontFamily: 'ZCOOLXiaoWei-Regular'}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="closecircleo" /> CLOSE</Text>
              </Button>
            </View>

          </View>
          </Modal>

            <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal4"} isDisabled={this.state.isDisabled}>
              <View style= {styles.formAdd}>
                <Text style = {styles.text} > Edit Customer </Text>
            <View style = {{marginLeft:14}}>
              <Item style = {{backgroundColor: '#fff', width:250}} >
              <Icon style= {{fontSize: 25}} type="FontAwesome" name="user" />
              <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft: 7 }}  onChangeText ={this.idCustomer}  onChangeText ={this.idCustomer} onChangeText ={this.name} value = {this.state.nameCustomer} />
              </Item>
              <Item  style = {{backgroundColor: '#fff', width:250, marginTop:5}} >
              <Icon style= {{fontSize: 25, marginLeft: 1}} type="FontAwesome" name="idcard" />
              <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft: 7 }}  onChangeText ={this.idCustomer}  value = {this.state.IdCustomer} />
              </Item>
              <Item  style = {{backgroundColor: '#fff', width:250, marginTop:5}} >
              <Icon style= {{fontSize: 25}} type="FontAwesome" name="mobile1" />
              <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft:7 }} onChangeText ={this.phone} value = {this.state.phoneCustomer} />
            </Item>
          </View>
            <View style= {{flexDirection: 'row', width: 250, alignSelf: 'center', marginLeft: 40}}>
              <Button onPress = {()=> this.update(this.state.id)}  style= {{marginTop: 5, width: 100}} >
                <Text style = {{fontSize:15, marginLeft:2}}><Icon style= {{fontSize: 15}} type="FontAwesome" name="save" />SAVE</Text>
              </Button>
              <Button onPress = {() => this.refs.modal4.close()}  style= {{marginTop: 5, marginLeft:5, backgroundColor: 'red', width: 100}} >
                <Text style = {{fontSize: 15,marginLeft: 4}}><Icon style= {{fontSize: 15}} type="FontAwesome" name="closecircleo" /> CLOSE</Text>
              </Button>
              </View>
              </View>
            </Modal>
          <View>
            <Footer navigation = {this.props.navigation} active3 = {'#00b3b3'} />
         </View>
            
         </Container>
              
           
            
          );
        }
      }

      const styles = StyleSheet.create({

        wrapper: {
          paddingTop: 50,
          flex: 1
        },

        modal: {
          justifyContent: 'center',
          alignItems: 'center'
        },

        modal2: {
          height: 230,
          backgroundColor: "#3B5998"
        },

        modal3: {
          height: 350,
          width: 300,
          backgroundColor: '#00997a',
          borderRadius: 20
        },

        modal4: {
          height: 300
        },

        btn: {
          margin: 10,
          backgroundColor: "#3B5998",
          color: "white",
          padding: 10
        },

        btnModal: {
          position: "absolute",
          top: 0,
          right: 0,
          width: 50,
          height: 50,
          backgroundColor: "transparent"
        },

        text: {
          color: "#fff",
          fontSize: 30,
          marginTop: -40,
          paddingBottom: 20,
          textAlign: 'center',
          fontFamily: 'Pacifico-Regular'
        },

        formAdd : {
                marginTop: -1
        }
      });
      const mapStateToProps = (state) => {
          return {
            customer : state.customer
          }
        }
        export default connect(
           mapStateToProps
        )(Customer);
