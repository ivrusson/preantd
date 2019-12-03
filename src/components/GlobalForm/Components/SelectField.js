import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
});

export default class SelectField extends React.PureComponent {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.array,
  };

  getError = error => {
    if (error) {
      return error.map(info => {
        return (
          <Text style={styles.errorinfoText} key={info}>
            {info}
          </Text>
        );
      });
    }
    return null;
  };

  render() {
    const { label, placeholder, type, onChange, value, error } = this.props;
    return (
      <View>
        <View>
          <Text>{label}</Text>
        </View>
        <View>
          <TextInput
            value={value ? value : null}
            placeholder={placeholder}
            type={type}
            duration={150}
            onChangeText={onChange}
          />
        </View>
        <View>{this.getError(error)}</View>
      </View>
    );
  }
}
