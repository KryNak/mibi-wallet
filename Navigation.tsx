import {Login} from "./Login";
import {Protected} from "./Protected";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import {RootStackParamList} from "./App";

export const Navigation = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();
    const {accessToken, refreshToken} = useSelector((root: RootState) => root.appState.user)

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}>
                {accessToken && refreshToken ? (
                    <Stack.Screen name={"Protected"} component={Protected}/>
                ) : (
                    <Stack.Screen
                        name={"Login"}
                        component={Login}
                        options={{
                            animationTypeForReplace: accessToken ? "push" : "pop"
                        }}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}