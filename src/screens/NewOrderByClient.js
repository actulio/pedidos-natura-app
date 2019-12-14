import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  TouchableOpacity
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

  return (
    <KeyboardAvoidingView style={styles.form} behavior="padding" keyboardVerticalOffset="150">
      <MyTextInput
        label="Nome do cliente *"
        name="name"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        returnKeyType="next"
        autoCapitalize="words"
      />

      <ScrollView>
        <FieldArray
          name="products"
          render={(arrayHelpers) => (
            <>
              {values.products.map((product, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <View key={`i-${index}`} style={styles.productItem}>

                  <View style={styles.cancelButtonContainer}>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={() => arrayHelpers.remove(index)}
                    >
                      <Ionicons name="md-close-circle" size={20} color="#A9A9A9" />
                    </TouchableOpacity>

                  </View>

                  <MyTextInput
                    name={`products[${index}].code`}
                    label="Código *"
                    onChangeText={handleChange(`products[${index}].code`)}
                    onBlur={handleBlur(`products[${index}].code`)}
                    value={values.products[index].code}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />


                  <MyTextInput
                    name={`products[${index}].value`}
                    label="Valor *"
                    onChangeText={handleChange(`products[${index}].value`)}
                    onBlur={handleBlur(`products[${index}].value`)}
                    value={values.products[index].value}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  <MyTextInput
                    name={`products[${index}].description`}
                    label="Descrição *"
                    onChangeText={handleChange(`products[${index}].description`)}
                    onBlur={handleBlur(`products[${index}].description`)}
                    value={values.products[index].description}
                  />
                  <MyTextInput
                    name={`products[${index}].quantity`}
                    label="Quantidade *"
                    onChangeText={handleChange(`products[${index}].quantity`)}
                    onBlur={handleBlur(`products[${index}].quantity`)}
                    value={values.products[index].quantity}
                    defaultValue={values.products[index].quantity.toString()}
                    keyboardType="number-pad"
                  />

                </View>
              ))}

              {/*
              <TouchableOpacity
                style={{
                  overflow: 'hidden',
                  position: 'absolute',
                  alignSelf: 'baseline',
                  flex: 1
                }}
                onPress={() => (
                  arrayHelpers.push({
                    code: '', value: '', description: '', quantity: 1
                  })
                )}
              >
                <Ionicons name="md-add-circle" size={20} color="#A9A9A9" />
              </TouchableOpacity> */}
              <Button
                title="+"
                onPress={() => (
                  arrayHelpers.push({
                    code: '', value: '', description: '', quantity: 1
                  })
                )}
                color={Colors.primaryColor}

              />
              <Button
                title="submit"
                onPress={handleSubmit}
              />
            </>
          )}
        />
      </ScrollView>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
    padding: 20,
    marginBottom: 10,
    marginHorizontal: 1,
    elevation: 1,
    borderRadius: 5,
    overflow: 'hidden',
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
        description: Yup.string().required('A descrição é obrigatória'),
        quantity: Yup.number().required('A quantidade é obrigatória'),
      })
    ),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    props.navigation.navigate('Home');
  }
})(InnerNewOrder);


export default newOrderByClient;
