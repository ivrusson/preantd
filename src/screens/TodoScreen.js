import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { connect } from 'dva';
import HeaderBar from '../components/HeaderBar';
import { List, Modal, Button } from 'antd-mobile-rn';

const Item = List.Item;

@connect(({ main }) => ({
  main,
}))
export default class TodoScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: <HeaderBar title={'Animation'} />,
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'TO DO'}>
          <Item>{'1. Fisrt item'}</Item>
          <Item>{'2. Second item'}</Item>
        </List>
      </ScrollView>
    );
  }
}
