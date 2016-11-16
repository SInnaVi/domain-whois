import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableHighlight,
    BackAndroid,
    Navigator
} from 'react-native';

export default class ResultPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
      textresp: 'Information about domain:'
      };
  }

  handlePressButthh() {
      this.props.navigator.pop();
  }

  render() {

      return (
        <ScrollView style = {{backgroundColor: '#71A1CC'}}>
        <View style={styles.container}>
                <Text style = { styles.subtitle }>
                   { this.props.textresp }
                </Text>
                <View>
                    <TouchableHighlight style={styles.button}
                          underlayColor='#735D3D'
                           onPress={() => this.handlePressButthh()}>
                           <Text style={styles.buttonText}>Back</Text>
                    </TouchableHighlight>
                </View>
        </View>
        </ScrollView>
                );
          }
          componentDidMount() {
                  //the '.bind(this)' makes sure 'this' refers to 'ViewComponent'
                  BackAndroid.addEventListener('hardwareBackPress', function() {
                      this.props.navigator.pop();
                      return true;
                  }.bind(this));
              }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#71A1CC',
    },
    subtitle: {
        fontSize: 20,
        color: '#fefefe',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
      height: 50,
      flexDirection: 'row',
      backgroundColor: '#99723A',
      borderColor: '#735D3D',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center',
      width: 150
    },


});

// componentWillUnmount() {
//     BackAndroid.addEventListener('hardwareBackPress', () => {
//         this.props.navigator.pop();
//         return true;
// });
// }


module.exports = ResultPage;
