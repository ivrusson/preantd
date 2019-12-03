import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { connect } from 'dva';
import HeaderBar from '../components/HeaderBar';
import { List, Modal, Button } from 'antd-mobile-rn';

const Item = List.Item
const Brief = Item.Brief

@connect(({ main }) => ({
  main,
}))
export default class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  static navigationOptions = {
    header: <HeaderBar title={'Home'} />,
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
    ];
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'basic'}>
          <Item data-seed='logId'>Headline text click no feedback, text is long, hidden, text is long, hidden</Item>
          <Item wrap>Text Long Line Text Long Line Text Long Line Text Long Line Text Long Line</Item>
          <Item disabled extra='Right arrow' arrow='horizontal' onClick={() => { }}>Headline text</Item>
          <Item extra='Down arrow' arrow='down' onClick={() => this.setState({ visible: true })}>Headline text</Item>
        </List>
        <Modal
          title="Title"
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
          closable
          footer={footerButtons}
        >
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: 'center' }}>Content...</Text>
            <Text style={{ textAlign: 'center' }}>Content...</Text>
          </View>
          <Button type="primary" onPress={this.onClose}>
            close modal
          </Button>
        </Modal>
      </ScrollView>
    );
  }
}
