import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import login from './src/screen/Login'
import checkin from './src/screen/checkin'
import room from './src/screen/room'
import customer from './src/screen/customer'
import setting from './src/screen/setting'
import store from './src/Redux/store'
import { Provider } from 'react-redux'

const Screen =  createAppContainer(
  createStackNavigator({

 Login: {
       screen: login,
       title: 'Login',
       navigationOptions: {header: null},
 },

 checkin: {
      screen: checkin,
      title: 'Checkin',
      navigationOptions: {header: null},
},

room: {
      screen: room,
      title:' Room',
      navigationOptions: {header: null},
},

customer : {
      screen : customer,
      title  : 'Customer',
      navigationOptions : {header : null}
},

setting : {
      screen : setting,
      title : 'Setting',
      navigationOptions : {header : null}
}

}))

const App = () => {
  return (
    <Provider store={store}>
      < Screen  />
    </Provider>
  )
}

export default App;

console.disableYellowBox= true
