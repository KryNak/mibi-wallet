import * as Yup from 'yup';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Formik} from "formik";
import {RootStackParamList} from "./App";
import {useLoginMutation} from "./store";
import {Button, TextInput, View} from "react-native";

interface Credentials {
    username: string,
    password: string
}

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({navigation}: Props) {

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

    const [login] = useLoginMutation()

    const onSubmit = (values: Credentials) => {
        const asyncBlock = async () => {
            const response = await login({username: values.username, password: values.password})
            console.log(JSON.stringify(response))
        }

        asyncBlock().catch(console.error)
    }

    return (
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            {({handleSubmit, handleChange, handleBlur, values, errors}) => (
                <View>

                    <TextInput
                        value={values.username}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                    />

                    <TextInput
                        passwordRules={'password'}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />

                    <Button onPress={() => handleSubmit()} title={"Login"}></Button>
                </View>
            )}
        </Formik>
    );
}
