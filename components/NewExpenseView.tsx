import {
    Box,
    Button,
    Divider,
    HStack,
    Icon,
    Input,
    Modal,
    Pressable,
    Stack,
    Text,
    theme,
} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import styled, {css} from "styled-components";
import RNDateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {useState} from "react";
import {BottomSheetTextInput} from "@gorhom/bottom-sheet";
import {colors} from "../colors";

export const NewExpenseView = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const animation = useSharedValue({height: 200})
    const animationStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(animation.value.height, {
                duration: 350
            })
        }
    })

    const handleDateChange = (event: DateTimePickerEvent) => {
        const {nativeEvent: {timestamp}} = event;
        setDate(new Date(timestamp ?? 0))
    };

    const [date, setDate] = useState<Date>(new Date());
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const toggleDatePicker = () => {
        if (animation.value.height === 200) {
            animation.value = {height: 0};
            return;
        }

        animation.value = {height: 200}
    }

    return (
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
                    <Pressable onPress={toggleDatePicker}><Text
                        fontSize={16}>{date.toDateString()}</Text></Pressable>
                </DateTextArea>
                <Divider/>
                <Animated.View style={[animationStyle]}>
                    <DirectDateComponent onChange={handleDateChange} themeVariant={'dark'} value={date}
                                         display={'spinner'}/>
                </Animated.View>
                <Divider/>
                <CategorySelect>
                    <Icon as={MaterialCommunityIcons} name={'grid'} size={'2xl'}/>
                    <Pressable onPress={() => setIsOpen(true)} style={{width: '100%', height: '100%'}}/>
                </CategorySelect>
                <Divider/>
                <StyledCategoryButton>
                    <Icon as={MaterialCommunityIcons} name={'note-edit-outline'}
                          size={'2xl'}></Icon>
                    <BottomSheetTextInput style={{width: '100%'}}/>
                </StyledCategoryButton>
                <Divider/>
                <SaveExpenseButtonArea>
                    <Button size={'md'}>Zapisz</Button>
                </SaveExpenseButtonArea>
            </ActionSheetInnerContainer>
            <Modal justifyContent={'flex-start'} animationPreset={'fade'} size={'full'} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Modal.Content style={{backgroundColor: colors.secondary}} flex={1} minHeight={'100%'}>
                    <Modal.CloseButton marginTop={35}/>
                    <Modal.Header style={{backgroundColor: colors.secondary}} marginTop={35}>Wybierz kategorię</Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </ActionSheetContainer>
    )
}

const StyledCategoryButton = styled(HStack)`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const DirectDateComponent = styled(RNDateTimePicker)`
  width: 100%;
  height: 100%;
`

const DateTextArea = styled(Box)`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CategorySelect = styled(Box)`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const BarButton = styled(Pressable)<BarButtonProps>`
  padding: 10px 10px;
  border-radius: 5%;

  ${props => props.isSelected && css`
    background-color: ${theme.colors.violet["600"]};
  `}
`

const SaveExpenseButtonArea = styled(HStack)`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`

interface BarButtonProps {
    isSelected: boolean
}



interface BarButtonInnerAreaProps {
    isPressed: boolean
}

const BarButtonInnerArea = styled(Box)<BarButtonInnerAreaProps>`
  ${props => props.isPressed && css`
    transform: scale(0.95);
  `}
`