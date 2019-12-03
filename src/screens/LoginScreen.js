import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { createForm, formShape } from 'rc-form';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { connect } from 'dva';

@connect(({ user }) => ({
  ...user,
}))
export default class LoginScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };
  state = {
    loading: true,
    username: '',
    password: ''
  }

  componentDidMount() {
    console.log('LoginScreen componentDidMount', this);
    const { dispatch, navigation } = this.props;
    dispatch({
      type: 'user/currentUser',
      payload: { navigation }
    });
  }

  handleUsernameChange = username => {
    this.setState({ username })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  onLogin = async () => {
    const { dispatch, navigation } = this.props;
    const { username, password } = this.state
    dispatch({
      type: 'user/login',
      payload: { username, password, navigation }
    });
  }

  goToSignup = () => this.props.navigation.navigate('Signup')

  render() {
    console.log(this);
    const { error } = this.props
    const { username, password } = this.state

    return (
      <View style={styles.container}>
        <WingBlank>
          {error ? (
            <Text>{error}</Text>
          ) : null}
          <TextInput
            name='username'
            value={username}
            placeholder='Enter email'
            autoCapitalize='none'
            onChangeText={this.handleUsernameChange}
          />
          <WhiteSpace />
          <TextInput
            name='password'
            value={password}
            placeholder='Enter password'
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
          <WhiteSpace />
          <Button onClick={this.onLogin}>Login</Button>
          <WhiteSpace />
        </WingBlank>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
