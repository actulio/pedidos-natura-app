/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  View, Text, TextInput, StyleSheet
} from 'react-native';
import { useField } from 'formik';

const ErrorText = (props) => {
  const { error } = props;
  return (
    <View style={{ marginTop: -20, marginBottom: 10 }}>
      <Text style={{ color: 'red' }}>
        {error}
      </Text>
    </View>
  );
};

const FormikInput = React.forwardRef((props, ref) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const { label } = props;
  const [field, meta] = useField(props);
  const { value, name } = field;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        value={value[name]}
        style={styles.input}
        ref={ref}
      />
      {meta.touched && meta.error ? (
        <ErrorText error={meta.error} />
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  hasError: {
    color: 'red',
  },
  hasErrorContainer: {
    marginBottom: 5,
    marginTop: -20
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
});


export default FormikInput;
