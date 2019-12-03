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

export default class TextField extends React.PureComponent {
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
    const { label, placeholder, options, onChange, value, error } = this.props;
    return (
      <View>
        <View>
          <Text>{label}</Text>
        </View>
        <View>
          <Picker
            selectedValue={value ? value : null}
            onValueChange={onChange}
          >
          <Picker.Item label={placeholder ? placeholder : 'Select an item'} value="" />
          {options.map(option => (
            <Picker.Item label={option.text} value={option.value} />
          ))}
          </Picker>
        </View>
        <View>{this.getError(error)}</View>
      </View>
    );
  }
}
