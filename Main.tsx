import {
    Box,
    Button, Icon,
    IconButton, Text
} from "native-base";
import styled from "styled-components";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {BottomSheetModalSupervisor, useBottomSheetModalSupervisor} from "./components/BottomSheetModalSupervisor";
import {NewExpenseScreen} from "./components/NewExpenseScreen";
import {useBottomSheetModal} from "@gorhom/bottom-sheet";

export const Main = () => {

    useBottomSheetModal()
    const { open } = useBottomSheetModalSupervisor()

    return (
        <>
            <MainContainer>
                <TopBar/>
                <MainContent>
                </MainContent>
                <FooterBar>
                    <BottomBarButton/>
                    <BottomBarButton/>
                    <AddTransactionButton onPress={open} variant='solid'
                                          icon={<Icon as={MaterialCommunityIcons} name='plus'/>}/>
                    <BottomBarButton/>
                    <BottomBarButton/>
                </FooterBar>
            </MainContainer>
            <BottomSheetModalSupervisor>
                <NewExpenseScreen/>
            </BottomSheetModalSupervisor>

        </>
    )
}

const MainContainer = styled(Box)`
  display: flex;
  height: 100%;
`

const TopBar = styled(Box)`
  flex: 0 1;
  min-height: 80px;
  background-color: #2C2C38;
`

const MainContent = styled(Box)`
  flex: 1 0;
  background-color: #22212D;
`

const FooterBar = styled(Box)`
  padding-top: 10px;
  flex: 0 1;
  align-self: flex-end;
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #2C2C38;
`

const AddTransactionButton = styled(IconButton)`
  height: 40px;
  width: 40px;
  border-radius: 90%;
`

const BottomBarButton = styled(Button)`
  height: 40px;
  width: 40px;
`