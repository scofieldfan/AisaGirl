/**
 * demo
 */

import React, { Component } from 'react';
import {
  DatePickerIOS,
  Keyboard,
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Text>
          fanzhang
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
  },
  subContainer: {
    padding: 10,
  },
  line: {
    width: '100%',
    height: 50,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 14,
  },
  subtitle: {
    color: '#ccc',
  },
  colorLabel: {
    color: '#00f',
  },
  icon: {
    backgroundColor: '#ccc',
    borderRadius: 100,
    width: 30,
    height: 30,
  },
});
