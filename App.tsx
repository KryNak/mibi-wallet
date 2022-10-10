import {StyleSheet} from "react-native";
import {NativeBaseProvider, Button, Input, VStack, Text, FormControl} from 'native-base'
import * as Yup from 'yup';
import {Formik, FormikHelpers, FormikValues} from "formik";

export default function App() {

  interface Values {
    username: string,
    password: string
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(6, "Username is too short!")
        .max(30, "Username is too long!")
        .required("Username is required!"),
    password: Yup.string()
        .min(6, "Password is too short!")
        .max(30, "Password is too long!")
        .required("Password is required!")
  })

  const initialValues = {
    username: '',
    password: ''
  }


  const onSubmit = (values: Values) => {
    console.log(values)
  }

  return (
    <NativeBaseProvider>
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
        {
          ({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <VStack mx={10} height={"100%"} space={3} alignItems={"center"} justifyContent={"center"}>


                <Text bold fontSize={"3xl"}>Login</Text>


                <FormControl isInvalid={'username' in errors}>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input value={values.username}
                         onChangeText={handleChange('username')}
                         onBlur={handleBlur('username')}
                         size={"lg"}
                         placeholder={"Enter your username"}/>
                  <FormControl.ErrorMessage>
                    {errors.username}
                  </FormControl.ErrorMessage>
                </FormControl>


                <FormControl isInvalid={'password' in errors}>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input value={values.password}
                         onChangeText={handleChange('password')}
                         onBlur={handleBlur('password')}
                         placeholder={"Enter your password"}
                         size={"lg"}
                  />
                  <FormControl.ErrorMessage>
                    {errors.password}
                  </FormControl.ErrorMessage>
                </FormControl>


                <Button onPress={() => handleSubmit()} width={"100%"} colorScheme={"blue"} alignSelf={"flex-end"}>Login</Button>
                <Text>Don't have an account? Register here</Text>
                <Text>Forgot password</Text>
              </VStack>
          )
        }
      </Formik>
    </NativeBaseProvider>
  );
}
