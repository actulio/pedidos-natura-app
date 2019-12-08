import React from 'react';
import * as Yup from 'yup';
import {
  View,
  AsyncStorage,
  KeyboardAvoidingView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { withFormik } from 'formik';

import logo from '../assets/logo.png';
import Colors from '../constants/Colors';
import MyTextInput from '../components/FormikInput';
import MyHeaderButton from '../components/CustomHeaderButton';


const InnerLoginForm = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="160">
      <Image source={logo} />
      <View style={styles.form}>
        {/* <Text style={styles.label}>SEU EMAIL *</Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          name="email"
          style={styles.input}
        />
        {errors.email && touched.email && <ErrorText error={errors.email} /> }

        <Text style={styles.label}>SENHA *</Text>
        <TextInput
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          name="password"
          style={styles.input}
          secureTextEntry
          autoCorrect={false}
        />
        {errors.password && touched.password && <ErrorText error={errors.password} />} */}

        <MyTextInput
          label="SEU EMAIL *"
          name="email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
          returnKeyType="next"
        />
        <MyTextInput
          label="SUA SENHA *"
          name="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
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

// Login.navigationOptions = (navData) => ({
//   headerLeft: (
//     <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
//       <Item
//         title="Menu"
//         iconName="ios-menu"
//         onPress={() => {
//           navData.navigation.toggleDrawer();
//         }}
//       />
//     </HeaderButtons>
//   )
// });


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
