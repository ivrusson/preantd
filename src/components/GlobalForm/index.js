import React, { Component, createRef } from 'react';
import { createForm, formShape } from 'rc-form';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions,
  Button,
  Text,
  View,
} from 'react-native';
import {
  TextField,
  SelectField,
} from './Components'

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
});

class GlobalForm extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      submitting: false
    }
  }

  submit = () => {
    let self = this;
    self.props.form.validateFields((error, fields) => {
      console.log('validateFields', {error, value});
      self.props.onSubmit(error, value);
    });
  }

  buildFieldDecorator(field) {
    const { validateFirst = false } = this.props;
    const { getFieldDecorator, getFieldError } = this.props.form;
    return null;
  }

  visibility(field) {
    const { validateFirst = false } = this.props;
    const { getFieldValue } = this.props.form;
    const { id, visibility } = field;
    const value = getFieldValue(id);
    // Do some show/hide
    let result = false;
    if(visibility.length>0) {

    }
    return result;
  }

  renderFieldByType(props) {
    const { type } = props;
    let fieldProps = props;
    delete['type'];

    switch (type) {
      case 'text':
        return <TextField {...fieldProps}/>;
        break;
      case 'select':
        return <SelectField {...fieldProps}/>;
        break;
      default:
      return null;
    }

  }

  render() {
    const {
      fields = [],
      validateFirst = false,

    } = this.props;
    const { getFieldDecorator, getFieldError } = this.props.form;
    return (
      <View>
        {fields.map(field => {
          return getFieldDecorator(field.id, {
            validateFirst,
            initialValue: field.initialValue ? field.initialValue : null,
            rules: field.rules ? field.rules : [],
          })(renderFieldByType({
            ...field,
            error: getFieldError(field.id)
          }))
        })}
        <Button onPress={this.submit} disabled={submitting}>
          <Text>CONTINUAR</Text>
        </Button>
      </View>
    );
  }
}

export default createForm()(GlobalForm);
