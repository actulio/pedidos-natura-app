import React from 'react';
import * as Yup from 'yup';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { withFormik } from 'formik';

import logo from '../assets/logo.png';
import Colors from '../constants/Colors';
import MyTextInput from '../components/FormikInput';


const InnerLoginForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  values.email = 'aaa@gmail.com';
  values.password = 'password';

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="200">
      <Image source={logo} />
      <View style={styles.form}>

        <MyTextInput
          label="SEU EMAIL *"
          name="email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <MyTextInput
          label="SUA SENHA *"
          name="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>

  );
};

const Login = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Endereço de email inválido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    props.navigation.navigate('Home');
  }
})(InnerLoginForm);


const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    height: 42,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  }
});

export default Login;
