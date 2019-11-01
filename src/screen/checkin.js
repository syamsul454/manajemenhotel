          import React, { Component } from 'react';
          import { Container, Button,Text, Grid, Col, Form,Item, Picker, Content, Input} from 'native-base'
          import {
              View,
              StyleSheet,
              Dimensions,
              Image,
              TouchableOpacity,
              ScrollView,
              FlatList,
            } from 'react-native';
          import List from '../component/ComponentCheckin/listCheckin'
          import Header from '../component/Header/headercheckin'
          import Footer from '../component/Footer/footer'
          import Icon from 'react-native-vector-icons/AntDesign'
          import axios from 'axios'
          import { connect } from 'react-redux';
          import {getCheckin, postCheckin,checkout} from '../Redux/_action/checkin'
          import Modal from 'react-native-modalbox'
          import Slider from 'react-native-slider'
          import { getCustomer} from '../Redux/_action/customer'
          import { getRoom, addRoom } from '../Redux/_action/room'
          import CountDown from 'react-native-countdown-component'
          import moment from 'moment'
          import 'moment-timezone';


                  class Checkin extends Component {
                    constructor() {
                       super();
                       this.state = {
                         isOpen: false,
                         isDisabled: false,
                         swipeToClose: true,
                         sliderValue: 0.5,
                         selected2:'',
                         id:'',
                         room:'',
                         durasi:'',
                         name: ''
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

                     onValueChange2(value) {
                      this.setState({
                        selected2: value
                      });
                    }

                      durasi = (durasi) => {
                        this.setState({
                          durasi: durasi
                        })
                      }

                      // ---------------------------------------
                         checkin = (id, name) => {

                           this.setState({
                             room:name,
                             id:id,
                           })
                           this.refs.modal3.open()
                         }

                         checkout = (id,name) => {
                            this.setState({
                              name : name,
                              id : id
                            })
                            this.refs.modal4.open()
                         }
                  // ---------------------------------
              registerCheckin = async (id) => {
                const idcus = this.state.selected2
                const durasi = parseInt(this.state.durasi)
                const postData = {
                          idRoom : id,
                          idCustomer : idcus,
                          duration : durasi,
                          orderEndTime : moment().add(durasi,"minutes" ).format('YYYY/MM/DD HH:mm:ss'),
                          isDone : false,
                          isBooked : true
                          }
                        await this.props.dispatch(postCheckin(postData))
                        await  this.handle()
                        this.refs.modal3.close()


              }

              Recheckout = async (id) => {
                            const postData = {
                                  isBooked : false,
                                  isDone : true
                            }
                      await  this.props.dispatch(checkout(id,postData))
                      await  this.handle()
                        this.refs.modal4.close()


                      }

                      Autocheckout = (id) => {
                                alert('ini auto berdsarkan id', id )
                                //     const postData = {
                                //           isBooked : false,
                                //           isDone : true
                                //     }
                                // this.props.dispatch(checkout(id,postData))
                                //
                                // this.props.dispatch(getCheckin())
                                // this.props.dispatch(getCustomer())
                                // this.props.dispatch(getRoom())

                              }

                        handle =   () => {
                          this.props.dispatch(getCheckin())
                          this.props.dispatch(getCustomer())
                          this.props.dispatch(getRoom())
                        }
                    componentDidMount(){
                    this.handle()

                    }
                    render() {
                      return (
                      <Container>
                        <Header title = {'CHECKIN'} />
                          <Content >
                          <FlatList
                          data={this.props.checkin.DataCheckins}
                          renderItem={({ item, idx }) => (
                            <List style = {styles.input}
                            name = {item.order == undefined ? item.name : 'Booking' }
                            durasi = {item.order == undefined ? 10000 : item.order['duration']}
                            booked = { item.order == undefined ? false : true }
                            id = {item.id}
                            register = {item.order == undefined ? () => this.checkin(item.id, item.name) : () => this.checkout(item.id, item.customer['name'])  } />
                          )}
                          numColumns={3}
                          keyExtractor={(item, index) => index.toString()}
                          onRefresh= {() => this.handle()}
                          refreshing= {false}
                           />
                          </Content>
                          <Footer navigation = {this.props.navigation} active1 = {'#00b3b3'} />

                          <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                            <View style= {styles.formAdd}>
                              <Text style = {styles.text} > CHECKIN </Text>
                              <Text style = {{textAlign:'center', color:'#fff', marginTop: -2}} > ---Room--- </Text>
                              <Text style = {styles.text1} > {this.state.room} </Text>
                              <Form>
                              <Item style = {styles.formCheckin} >
                                <Input style = {styles.inputCheckin} onChangeText = {this.durasi}  placeholder= "Durasi" type="number"  />
                                </Item>
                              <Item picker style = {styles.formCheckin}>
                                <Picker
                                  mode="dropdown"
                                  iosIcon={<Icon name="arrow-down" />}
                                  style={{ width: undefined }}
                                  placeholder="Select your Customer"
                                  placeholderStyle={{ color: "#fff" }}
                                  placeholderIconColor="#007aff"
                                  backgroundColor='#fff'
                                  selectedValue={this.state.selected2}
                                  onValueChange={this.onValueChange2.bind(this)}
                                   >
                                    {this.props.customer.customer.map((item, index) => (
                                      <Picker.Item Style = {{color: '#fff'}} label= {item.name} value= {item.id} />
                                    )
                                    )}

                                </Picker>
                              </Item>
                            </Form>
                          <View style = {{  flexDirection: 'row'}}>
                        <Button onPress = {() => this.registerCheckin(this.state.id)} rounded style= {{marginTop: 5, marginLeft: 10, backgroundColor: 'blue'}} >
                        <Text style = {{marginLeft: 5, fontSize: 20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="save" />SAVE</Text>
                        </Button>
                        <Button onPress = {() => this.refs.modal3.close()} rounded style= {{marginTop: 5, marginLeft: 10, backgroundColor: 'red'}} >
                        <Text style = {{marginLeft:5, fontSize: 20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="closecircleo" /> CLOSE</Text>
                        </Button>
                          </View>
                          </View>
                          </Modal>


                          <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal4"} isDisabled={this.state.isDisabled}>
                            <View style= {styles.formAdd}>
                              <Text style = {styles.text} > CHECKOUT </Text>

                            <Text style = {styles.text} > {this.state.name}  </Text>

                            <View style = {{flexDirection: 'row'}}>
                            <Button onPress = {() => this.Recheckout(this.state.id)} rounded style= {{marginTop: 5, backgroundColor: 'red'}} >
                              <Text style = {{marginLeft: 1, fontSize: 20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="logout" /> CHECKOUT</Text>
                            </Button>
                              <Button onPress = {() => this.refs.modal4.close()} rounded style= {{marginTop: 5, marginLeft: 2, backgroundColor: 'red'}} >
                              <Text style = {{marginLeft: 10, fontSize: 20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="closecircleo" /> CLOSE</Text>
                            </Button>
                            </View>

                          </View>
                          </Modal>

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
                      height: 290,
                      width: 300,
                      backgroundColor: '#00997a',
                      borderRadius: 20,

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
                      marginTop: -5,
                      paddingBottom: 20,
                      textAlign: 'center',
                    },

                    text1: {
                      color: "#fff",
                      fontSize: 30,
                      marginTop: -5,
                      paddingBottom: 20,
                      textAlign: 'center',
                    },

                    formAdd : {
                            marginTop: -1
                    },
                    inputCheckin : {
                                  backgroundColor: '#fff',
                                  borderRadius: 20,

                                },

                    inputPicker : {
                              backgroundColor: '#fff',
                              borderRadius: 20,
                                },

                    formCheckin : {
                                width: 270,
                                borderBottomWidth: 0,
                                marginLeft: -2
                                }

                  });

                  const mapStateToProps = (state) => {
                      return {
                          token : state.user,
                          checkin : state.checkin,
                          customer : state.customer.DataCustomer

                      }
                    }
                    export default connect(
                      mapStateToProps
                    )( Checkin);
