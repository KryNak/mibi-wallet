import {
    Box,
    Button, Center, Divider, HStack, Icon,
    IconButton,
    Input, PresenceTransition, Pressable, Stack,
    Text, theme
} from "native-base";
import styled, {css} from "styled-components";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {useCallback, useMemo, useRef, useState} from "react";
import {
    BottomSheetModal,
    BottomSheetModalProvider
} from "@gorhom/bottom-sheet";
import {colors} from "./colors";
import RNDateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";

export const Main = () => {

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['45%', '95%'], []);

    const handleModalOpen = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleModalClose = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const handleDateChange = (event: DateTimePickerEvent) => {
        const {nativeEvent: {timestamp}} = event;
        setDate(new Date(timestamp ?? 0))
    };

    const [date, setDate] = useState<Date>(new Date());
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);

    const toggleDatePicker = () => {
        setDatePickerVisible(prev => !prev);
    }

    return (
        <>
            <BottomSheetModalProvider>
                <MainContainer>
                    <TopBar/>
                    <MainContent>
                    </MainContent>
                    <FooterBar>
                        <BottomBarButton/>
                        <BottomBarButton/>
                        <AddTransactionButton onPress={handleModalOpen} variant='solid' icon={<Icon as={MaterialCommunityIcons} name='plus'/>}/>
                        <BottomBarButton/>
                        <BottomBarButton/>
                    </FooterBar>
                </MainContainer>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    backgroundStyle={{backgroundColor: colors.secondary}}
                    handleIndicatorStyle={{backgroundColor: 'white'}}
                >
                    <ActionSheetContainer>
                        <ActionSheetInnerContainer>
                            <Bar>
                                <BarButton onPress={() => setSelectedIndex(0)} isSelected={selectedIndex === 0}>
                                    {({isPressed}) => (
                                        <BarButtonInnerArea isPressed={isPressed}>
                                            <Text>Wydatek</Text>
                                        </BarButtonInnerArea>
                                    )}
                                </BarButton>
                                <BarButton onPress={() => setSelectedIndex(1)} isSelected={selectedIndex === 1}>
                                    {({isPressed}) => (
                                        <BarButtonInnerArea isPressed={isPressed}>
                                            <Text>Przychod</Text>
                                        </BarButtonInnerArea>
                                    )}
                                </BarButton>
                                <BarButton onPress={() => setSelectedIndex(2)} isSelected={selectedIndex === 2}>
                                    {({isPressed}) => (
                                        <BarButtonInnerArea isPressed={isPressed}>
                                            <Text>Przelew</Text>
                                        </BarButtonInnerArea>
                                    )}
                                </BarButton>
                            </Bar>
                            <Divider/>
                            <MoneyInput size={'2xl'}/>
                            <Divider/>
                            <DateTextArea>
                                <Icon as={MaterialCommunityIcons} name={'calendar'} size={'2xl'}></Icon>
                                <Pressable onPress={toggleDatePicker}><Text fontSize={18}>{date.toDateString()}</Text></Pressable>
                            </DateTextArea>
                            <Divider/>
                            <DateComponent style={{height: isDatePickerVisible ? '200px' : '0'}} onChange={handleDateChange} themeVariant={'dark'} value={date}
                                           display={'spinner'}></DateComponent>
                            <Divider/>
                            <StyledInput InputLeftElement={<Icon as={MaterialCommunityIcons} name={'grid'} size={'2xl'}/>}/>
                            <Divider/>
                            <StyledInput InputLeftElement={<Icon as={MaterialCommunityIcons} name={'note-edit-outline'} size={'2xl'}></Icon>}/>
                            <Divider/>
                            <SaveExpenseButtonArea>
                                <Button size={'md'}>Zapisz</Button>
                            </SaveExpenseButtonArea>
                        </ActionSheetInnerContainer>
                    </ActionSheetContainer>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </>
    )
}

const DateComponent = styled(RNDateTimePicker)`
  width: 100%;
  height: 200px;
`

const DateTextArea = styled(Box)`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

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

const ActionSheetContainer = styled(Stack)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`

const ActionSheetInnerContainer = styled(Stack)`
    width: 100%;
`

const MoneyInput = styled(Input)`
  width: 100%;
  min-width: 100%;
  text-align: right;
  margin-top: 5px;
  margin-bottom: 5px;
`

const StyledInput = styled(Input)`
  width: 80%;
  margin-top: 5px;
  margin-bottom: 5px;
`

const Bar = styled(HStack)`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`

interface BarButtonProps {
    isSelected: boolean
}

const BarButton = styled(Pressable)<BarButtonProps>`
  padding: 10px 10px;
  border-radius: 5%;

  ${props => props.isSelected && css`
    background-color: ${theme.colors.violet["600"]};
  `}
`

interface BarButtonInnerAreaProps {
    isPressed: boolean
}

const BarButtonInnerArea = styled(Box)<BarButtonInnerAreaProps>`
  ${props => props.isPressed && css`
    transform: scale(0.95);
  `}
`

const SaveExpenseButtonArea = styled(HStack)`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`