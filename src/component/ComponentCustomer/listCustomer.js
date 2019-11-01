          import React, { Component } from "react"
          import { connect } from 'react-redux'
          import {
            View,
              StyleSheet,
              TouchableOpacity,
              Image
            } from 'react-native';
          import {Grid, Col, Text} from "native-base"
          class List extends Component {
          render() {
            return (
                  <TouchableOpacity onPress = {this.props.edit} >

                  <View style = {styles.box}>
                    <View>
                      <Image style = {styles.image} source = {{uri:'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png'}}  />
                     </View>

                      <View style = {styles.profil}>
                        <Text style = {{color: '#fff', fontFamily: 'ZCOOLXiaoWei-Regular', fontSize:20}}> {this.props.name}  </Text>
                        <Text style = {{color: '#fff', fontFamily: 'ZCOOLXiaoWei-Regular', fontSize:10}}>  Id Card</Text>
                        <Text style = {{color: '#fff', fontFamily: 'ZCOOLXiaoWei-Regular', fontSize:20}}> {this.props.idCustomer}  </Text>
                          <Text style = {{color: '#fff', fontFamily: 'ZCOOLXiaoWei-Regular', fontSize:10}}>  Phone Number</Text>
                        <Text style = {{color: '#fff', fontFamily: 'ZCOOLXiaoWei-Regular', fontSize:20}}> {this.props.phone}  </Text>
                      </View>
                  </View>
                  </TouchableOpacity>
                );
          }
          }

                    const styles = StyleSheet.create({
                      box : {
                                backgroundColor: '#00b36b',
                                height: 100,
                                width: 320,
                                borderRadius: 8,
                                margin: 8,
                                flexDirection: 'row'

                            },

                            image : {
                                  width: 100,
                                  height:100
                            },

                            profil : {
                               marginTop: 5,
                               width: 200
                            }




                    })

  export default List
