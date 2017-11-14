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

class SubTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.line}>
        <Text style={styles.subtitle}>{this.props.title}</Text>
      </View>
    );
  }
}
class Line extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.line}>
        <Text style={styles.label}>{this.props.left}</Text>
        <Text style={styles.colorLabel}>{this.props.right}</Text>
      </View>
    );
  }
}


export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Gallery
            style={{flex: 1, backgroundColor: 'black'}}
            images={[
                'http://p10.qhimg.com/t019e9cf51692f735be.jpg',
                'http://ww2.sinaimg.cn/mw690/714a59a7tw1dxqkkg0cwlj.jpg',
                'http://www.bz55.com/uploads/allimg/150122/139-150122145421.jpg'
            ]}
        />
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
