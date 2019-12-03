import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HeaderBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { title } = this.props;
    return (
      <View style={styles.headerBar}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
    height: 100,
  },
  text: {
    alignContent: 'center',
    color: '#ffffff',
  }
})
