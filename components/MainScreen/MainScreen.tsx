import {
    Box,
    Button, Icon,
    IconButton
} from "native-base";
import styled from "styled-components";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {BottomSheetModalSupervisor, useBottomSheetModalSupervisor} from "../shared/BottomSheetModalSupervisor";
import {NewExpense} from "../NewExpense/NewExpense";
import {useBottomSheetModal} from "@gorhom/bottom-sheet";
import {colors} from "../../colors";

export const MainScreen = () => {

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
                <NewExpense/>
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
  background-color: ${colors.background_secondary};
`

const MainContent = styled(Box)`
  flex: 1 0;
  background-color: ${colors.background_primary};
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