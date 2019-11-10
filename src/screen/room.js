import React, { Component } from 'react';
import { Container,Content, Text, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
  } from 'react-native';
import List from '../component/ComponentRoom/listroom'
import Header from '../component/Header/header'
import Footer from '../component/Footer/footer'
import { connect } from 'react-redux';
import { getRoom, addRoom } from '../Redux/_action/room'
import Modal from 'react-native-modalbox'
import Slider from 'react-native-slider'
import {SkypeIndicator} from 'react-native-indicators'
import Loading from '../component/loading'

      class Room extends Component {
        constructor() {
           super();
           this.state = {
             isOpen: false,
             isDisabled: false,
             swipeToClose: true,
             sliderValue: 0.3,
             addroom:'',
             idroom:'',
             room:''
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

         valueroom = (add) =>{
           console.log(add)
           this.setState({
             addroom:add,
             room:add
           })
         }

         edit = (id, name) => {
           this.setState({
             room: name,
             idroom : id
           })
         this.refs.modal4.open()

         }

          editroom = (id) => {
            var postData = {
                name: this.state.room
              };

            axios.put(`http://192.168.1.9:5000/api/v2/room/${id}`,postData)
            .then((res) => {
              const message = res.data['message']
               if (message === 'success') {
               alert('Success')
                 this.props.dispatch(getRoom())
                 this.refs.modal4.close()

               }
            })

          }

        // add room
         addroom = async () => {
           var postData = {
               name: this.state.addroom
             };
              await this.props.dispatch(addRoom(postData))
              await this.props.dispatch(getRoom())
                this.refs.modal3.close()
                alert('success')


           }

        componentDidMount(){
             this.props.dispatch(getRoom())

        }
        render() {
          return (
            <Container>
              <Header title = {'ROOM'} button = {() => this.refs.modal3.open()} />
              <Content >
              {this.props.room.isLoading === false ? null : <Loading /> }
                <FlatList
                data={this.props.room.DataRoom.rooms}
                renderItem={({ item }) => (
                <List name = {item.name} edit = {()=> this.edit(item.id,item.name)} />
              )}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
               />
              </Content>
              <Footer navigation={this.props.navigation}  active2 = {'#00b3b3'} />

              <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                <View style= {styles.formAdd}>
                  <Text style = {styles.text} > Add Room </Text>
                  <Item  style = {{backgroundColor: '#fff', width:250}} >
                  <Icon style= {{fontSize: 25, marginLeft: 1}} type="FontAwesome" name="bed" />
                  <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft: 7 }} onChangeText = {this.valueroom} placeholder='Add Room' />
                </Item>
                <View style = {{flexDirection:'row', alignSelf: 'center',}}>
                  <Button onPress = {this.addroom}  style= {{marginTop: 5}} >
                    <Text style = {{marginLeft: 5, fontSize:20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="save" /> Save</Text>
                  </Button>
                  <Button onPress = {() => this.refs.modal3.close()}  style= {{marginTop: 5, backgroundColor: 'red', marginLeft:5}} >
                    <Text style = {{marginLeft: 10, paddingLeft: 5, fontSize: 20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="close" /> Close</Text>
                  </Button>
                </View>
              
              </View>
              </Modal>

              <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal4"} isDisabled={this.state.isDisabled}>
                <View style= {styles.formAdd}>
                  <Text style = {styles.text} >EDIT ROOM </Text>
                  <Item style = {{backgroundColor: '#fff', width:250}} >
                  <Icon style= {{fontSize: 25, marginLeft: 1}} type="FontAwesome" name="bed" />
                  <Input style = {{backgroundColor: '#fff', color: 'black', width: 10, fontFamily: 'ZCOOLXiaoWei-Regular',marginLeft: 7 }} onChangeText = {this.valueroom} value = {this.state.room} />
                </Item>

                <View style = {{flexDirection:'row', alignSelf: 'center',}}>
                  <Button onPress = {()=> this.editroom(this.state.idroom)}  style= {{marginTop: 5}} >
                    <Text style = {{marginLeft: 5, fontSize:20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="save" /> Save</Text>
                  </Button>
                  <Button onPress = {() => this.refs.modal4.close()}  style= {{marginTop: 5, backgroundColor: 'red', marginLeft:5}} >
                    <Text style = {{marginLeft: 10, paddingLeft: 5, fontSize: 20}}><Icon style= {{fontSize: 20}} type="FontAwesome" name="close" /> Close</Text>
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

        loading : {

              alignContent: 'center',
              alignSelf:'center',
              marginTop: 220
        },

        formAdd : {
                marginTop: -1
        }

      });
      const mapStateToProps = (state) => {
          return {
              room : state.room
          }
        }
        export default connect(
          mapStateToProps
        )(Room);
