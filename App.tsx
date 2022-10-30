import {Provider as ReduxProvider} from "react-redux";
import {store} from "./store";
import {Navigation} from "./Navigation";

export type RootStackParamList = {
    Login: undefined
    Protected: undefined
    Public: undefined
};

export default function App() {

    return (
        <ReduxProvider store={store}>
            <Navigation/>
        </ReduxProvider>
    )
}
