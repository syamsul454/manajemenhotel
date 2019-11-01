import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Login', () => require('./Login').default);

  }