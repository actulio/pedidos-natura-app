import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import * as Yup from 'yup';
import { withFormik, FieldArray } from 'formik';
import MyTextInput from '../components/FormikInput';
import Colors from '../constants/Colors';


const InnerNewOrder = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  const refs = React.useRef([{}]);
  const focusField = (index, name) => {
    refs.current[index][name].focus();
  };
  const setInputRef = (index, name, inputRef) => {
    refs.current[index][name] = inputRef;
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.form} behavior="padding" keyboardVerticalOffset="130">
        <MyTextInput
          label="Nome do cliente *"
          name="name"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          returnKeyType="next"
          autoCapitalize="words"
          onSubmitEditing={() => focusField(0, 'code')}
          blurOnSubmit={false}
        />

        <FieldArray
          name="products"
          render={(arrayHelpers) => (
            <ScrollView style={{ marginBottom: 5, flex: 1 }}>
              {values.products.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
                <View key={`i-${index}`} style={{ overflow: 'hidden', borderRadius: 5 }}>
                  <View style={styles.productItem}>

                    {(index !== 0) && (
                    <View style={styles.cancelButtonContainer}>
                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => {
                          arrayHelpers.remove(index);
                        }}
                      >
                        <Ionicons name="md-close-circle" size={20} color={Colors.lightGray} />
                      </TouchableOpacity>
                    </View>
                    )}

                    <MyTextInput
                      name={`products[${index}].code`}
                      label="Código *"
                      onChangeText={handleChange(`products[${index}].code`)}
                      onBlur={handleBlur(`products[${index}].code`)}
                      value={values.products[index].code}
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="next"
                      forwardRef
                      ref={(inputRef) => setInputRef(index, 'code', inputRef)}
                      onSubmitEditing={() => focusField(index, 'value')}
                      blurOnSubmit={false}
                    />

                    <MyTextInput
                      name={`products[${index}].value`}
                      label="Valor *"
                      onChangeText={handleChange(`products[${index}].value`)}
                      onBlur={handleBlur(`products[${index}].value`)}
                      value={values.products[index].value}
                      keyboardType="number-pad"
                      returnKeyType="next"
                      ref={(inputRef) => setInputRef(index, 'value', inputRef)}
                      onSubmitEditing={() => focusField(index, 'quantity')}
                      blurOnSubmit={false}
                    />
                    <MyTextInput
                      name={`products[${index}].quantity`}
                      label="Quantidade *"
                      onChangeText={handleChange(`products[${index}].quantity`)}
                      onBlur={handleBlur(`products[${index}].quantity`)}
                      value={values.products[index].quantity}
                      defaultValue={values.products[index].quantity.toString()}
                      keyboardType="number-pad"
                      returnKeyType="next"
                      ref={(inputRef) => setInputRef(index, 'quantity', inputRef)}
                      onSubmitEditing={() => focusField(index, 'description')}
                      blurOnSubmit={false}
                    />
                    <MyTextInput
                      name={`products[${index}].description`}
                      label="Descrição"
                      onChangeText={handleChange(`products[${index}].description`)}
                      onBlur={handleBlur(`products[${index}].description`)}
                      value={values.products[index].description}
                      ref={(inputRef) => setInputRef(index, 'description', inputRef)}
                    />

                  </View>
                </View>
              ))}

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  refs.current.push({});
                  arrayHelpers.push({
                    code: '', value: '', description: '', quantity: 1
                  });
                }}
              >
                <Ionicons name="ios-add-circle-outline" size={35} color={Colors.lightGray} />
              </TouchableOpacity>

            </ScrollView>
          )}
        />

      </KeyboardAvoidingView>

      <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="md-checkmark" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  submitButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    elevation: 7,
    bottom: 10,
    right: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 24,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  productItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 1,
    borderColor: '#ddd',
    // borderWidth: 2,
    borderRadius: 5,
    borderBottomRightRadius: 40,
    // overflow: 'hidden',
    elevation: 3,
  },
  cancelButtonContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  cancelButton: {
    margin: 5,
    overflow: 'hidden'
  }
});

const newOrderByClient = withFormik({
  mapPropsToValues: () => ({
    name: '',
    products: [{
      code: '',
      value: '',
      description: '',
      quantity: 1
    }],
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required('O nome do cliente é obrigatório'),
    products: Yup.array().of(
      Yup.object().shape({
        code: Yup.string().required('O código é obrigatório'),
        value: Yup.string().required('O valor é obrigatório'),
        description: Yup.string(),
        quantity: Yup.number().required('A quantidade é obrigatória'),
      })
    ),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    // props.navigation.navigate('Home');
  }
})(InnerNewOrder);


export default newOrderByClient;
