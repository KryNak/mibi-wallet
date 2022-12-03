import {colors} from "../colors";
import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {createContext, RefObject, useContext, useMemo, useRef} from "react";
import {BottomSheetModalMethods} from "@gorhom/bottom-sheet/lib/typescript/types";

interface BottomSheetModalSupervisorProps {
    children: JSX.Element;
}

interface BottomSheetModalSupervisorContextProviderProps {
    children: JSX.Element;
}

interface BottomSheetModalSupervisorContextType {
    open: () => void,
    close: () => void,
    ref: RefObject<BottomSheetModalMethods> | null
}

const initialBottomSheetModalSupervisorContextProps : BottomSheetModalSupervisorContextType = {
    open: () => {},
    close: () => {},
    ref: null
};

const BottomSheetModalSupervisorContext = createContext<BottomSheetModalSupervisorContextType>(
    initialBottomSheetModalSupervisorContextProps
);

export const BottomSheetModalSupervisorContextProvider = ({children}: BottomSheetModalSupervisorContextProviderProps) => {

    const ref = useRef<BottomSheetModalMethods>(null);
    const open = () => ref.current?.present();
    const close = () => ref.current?.close();

    return (
        <BottomSheetModalSupervisorContext.Provider value={{
            ref: ref,
            open: open,
            close: close
        }}>
            {children}
        </BottomSheetModalSupervisorContext.Provider>
    );
};

export const useBottomSheetModalSupervisor: () => BottomSheetModalSupervisorContextType = () => {
    return useContext(BottomSheetModalSupervisorContext);
};

export const BottomSheetModalSupervisor = ({children}: BottomSheetModalSupervisorProps) => {

    const { ref } = useBottomSheetModalSupervisor()

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={['95%']}
            backgroundStyle={{backgroundColor: colors.secondary}}
            handleIndicatorStyle={{backgroundColor: 'white'}}
        >
            {children}
        </BottomSheetModal>
    );
};