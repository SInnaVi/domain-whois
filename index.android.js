/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    BackAndroid,
    Navigator,
    TouchableHighlight,
    Text,
    View
} from 'react-native';

var MainPage = require('./MainPage');
var ResultPage = require('./result.page');

const routes = [ {title: 'MainPage', index: 0},
                 {title: 'ResultPage', index: 1},
                ];

export default class App extends Component {
 render() {

    return (
        <Navigator
            initialRoute={{
                id: 'MainPage'
            }}
            renderScene={(route, nav) =>
                    {return this.renderScene(route, nav)}} />
    );
  }

  renderScene (route,nav) {
   switch (route.id) {
      default:
      case 'MainPage':
        return <MainPage navigator={nav} {...route.passProps}/>
      case "ResultPage":
        return <ResultPage navigator={nav} {...route.passProps}/>
   }
}
}

AppRegistry.registerComponent('example', () => App);
