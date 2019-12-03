import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'dva';
import HeaderBar from '../components/HeaderBar';

@connect(({ main }) => ({
  main,
}))
export default class AboutScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: <HeaderBar title={'About PreAnt'} />,
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ marginBottom: 5, padding: 10 }}>
            <Text style={{fontSize:16, fontWeight: 600}}>PreAntd Starter pack</View>
            <Text style={{fontSize:12, fontWeight: 300}}>This is an example app build for use as Parse Client using Expo, React Native, DVA, Antd Mobile and LokiJS.</Text>
          </View>
        </View>
      </ScrollView>

    );
  }
}
