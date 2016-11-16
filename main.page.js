/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import Checkbox from 'react-native-custom-checkbox';
// import CheckBox from 'react-native-checkbox';
// import CircleCheckBox from 'react-native-circle-checkbox';
// import Icon from 'react-native-vector-icons';

// import MyScene from './MyScene.js';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView,
    ListView,
    View,
    TextInput
} from 'react-native';

import CheckBox from 'react-native-icon-checkbox';
import Button from 'apsl-react-native-button';

var dom;

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	text: '',
        	cb2_isChecked: false,
        	cb3_isChecked: false,
        	textresp: 'Something'
        };
    }

    handlePressCheckedBox1 = (checked) => {
    	// this.setState({
		this.setState({ cb2_isChecked: checked });
    	// });
	    if ((this.state.text.trim() !== '') && (!this.state.cb3_isChecked) && (this.state.cb2_isChecked == false))
		    {
		    	this.setState({
				text: this.state.text.trim() + '.com'
				});
			}
	}

	handlePressCheckedBox2 = (checked) => {
		this.setState({ cb3_isChecked: checked });

		if ((this.state.text.trim() !== '') && (!this.state.cb2_isChecked) && (this.state.cb3_isChecked == false))
		    {
		    	this.setState({
				text: this.state.text.trim() + '.net'
				});
				// alert(dom);
			}
	}

	handlePressButt2() {
		this.setState({
			text: '',
			cb2_isChecked: false,
			cb3_isChecked: false,
			textresp: ''
		});
	}

   	handlePressButt1() {

		dom = this.state.text.trim()
		var url = 'http://192.168.1.103:8080/ServletWhois/whois?domain=' + dom;
		alert(url);

		console.log(url);

		fetch(url)
		.then(response => response.text())
		.then((data) => {
			console.log(data);
			this.setState({
				textresp: 'Information about domain:' + '\n\n' + data
			});
		}).catch((err) => {
			console.log(err);
		});
	}

	handleTextInputChange() {
		dom = this.state.text.trim();
	}

  // handleSelectedRadionButton = (checked) => {
  //   this.setState({
  //     isRadioSelected: checked,
  //   });
  // }

    render() {

        return (
        <ScrollView style = {{backgroundColor: '#71A1CC'}}>
          <View style = { styles.container }>
            <Text style = { styles.subtitle }>
            Please, enter a domain:
            </Text>

            <TextInput
                  style = { styles.inputtext }
                  onChangeText = {
                      (text) => this.setState({ text })
                  }
                  value = { this.state.text }
                />

            <Text style={ styles.subtitle }>
              Choose
            </Text>

          <View style={{marginBottom: 50 }}>
            <CheckBox
              id= 'first'
              label=".com"
              size={30}
              checked={this.state.cb2_isChecked}
              onPress={this.handlePressCheckedBox1}
              style = { styles.checkb }
            />

        		<CheckBox
                id= 'second'
                label=".net"
                size={30}
                checked={this.state.cb3_isChecked}
                onPress={this.handlePressCheckedBox2}
                style = { styles.checkb }
              />
          </View>

          <View>
              <Button style={ styles.butt } textStyle= { styles.textst }
              onPress={() => this.handlePressButt1()}>
                Check
              </Button>

              <Button style={ styles.butt } textStyle= { styles.textst }
              onPress={() => this.handlePressButt2()}>
                ClearAll
              </Button>
          </View>


        	<View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                // alignItems: 'flex-end',
              }}>
              <Text style = { styles.subtitle }>
                 { this.state.textresp }
              </Text>
          </View>
      </View>
</ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#71A1CC',
    },
    welcome: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 0,
        paddingBottom: 0,
    },
    subtitle: {
        fontSize: 20,
        color: '#fefefe',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    },

    inputtext: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 15,
    },
    boold: {
        fontSize: 20,
        fontWeight: '900',
    },
    butt: {
        borderRadius: 0,
        width: 150,
        textAlign: 'center',
        // marginBottom: 0,
        borderWidth: 3,
        borderColor: '#255785',

    },
    textst: {
      fontSize: 30,
      fontWeight: '100',
      color: '#2E4A64',
      // color: 'black',
    },

});
