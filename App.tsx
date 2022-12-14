import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { MainScreen } from "./components/MainScreen/MainScreen";
import { extendTheme, NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import { BottomSheetModalSupervisorContextProvider } from "./components/shared/BottomSheetModalSupervisor";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {

    StatusBar.setBarStyle("light-content")

    const theme = extendTheme({
        components: {
            Button: {
                defaultProps: {
                    colorScheme: 'violet'
                }
            },
            Input: {
                defaultProps: {
                    size: '2xl',
                    variant: 'unstyled',
                    keyboardAppearance: 'dark'
                }
            },
            IconButton: {
                defaultProps: {
                    colorScheme: 'violet'
                }
            },
            Icon: {
                defaultProps: {
                    color: 'white'
                }
            }
        },
        config: {
            initialColorMode: 'dark'
        }
    })

    return (
        <ReduxProvider store={store}>
            <NativeBaseProvider theme={theme}>
                <BottomSheetModalProvider>
                    <BottomSheetModalSupervisorContextProvider>
                        <MainScreen/>
                    </BottomSheetModalSupervisorContextProvider>
                </BottomSheetModalProvider>
            </NativeBaseProvider>
        </ReduxProvider>
    )
}
