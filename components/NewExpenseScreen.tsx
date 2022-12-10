import {Box, Divider, HStack, Icon, Pressable, Stack, Text} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import styled from "styled-components";
import RNDateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import React, {useRef, useState} from "react";
import {BottomSheetTextInput} from "@gorhom/bottom-sheet";
import {CategoryScreen} from "./CategoryScreen";
import {useDispatch} from "react-redux";
import {openCategoryModal} from "../store";
import {Button, Chip, MaskedInput, SegmentedControl, View} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import {colors} from "../colors";
import KeyboardAccessoryView from "react-native-ui-lib/lib/components/Keyboard/KeyboardInput/KeyboardAccessoryView";

export const NewExpenseScreen = () => {

    const moneyInputRef = useRef(null)
    const dispatch = useDispatch()

    const animation = useSharedValue({height: 0})
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

    const toggleDatePicker = () => {
        if (animation.value.height === 200) {
            animation.value = {height: 0};
            return;
        }

        animation.value = {height: 200}
    }

    const renderPrice = (value: string) => {
        const hasValue = Boolean(value && value.length > 0);
        return (
            <View style={styles.moneyInputInnerContainerStyle}>
                <Text style={styles.moneyInputStyle}>
                    {"- "}
                </Text>
                <Text style={styles.moneyInputStyle}>
                    {hasValue ? value : '0'}
                </Text>
                <View style={styles.moneyInputSuffixStyle}>
                    <Chip labelStyle={styles.currencyChipLabelStyle}
                          containerStyle={styles.currencyChipContainerStyle}
                          label={'PLN'}
                    />
                </View>
            </View>)
    };

    return (
        <ActionSheetContainer>
            <ActionSheetInnerContainer>
                <SegmentedControl
                    backgroundColor={colors.secondary}
                    segments={[{label: 'Wydatek'}, {label: 'Przychód'}, {label: 'Przelew'}]}
                    inactiveColor={'white'}
                    style={styles.segmentStyle}
                />
                <MaskedInput
                    containerStyle={styles.moneyInputContainerStyle}
                    renderMaskedText={renderPrice}
                    formatter={(value: string) => value?.replace(/\D/g, '')}
                    keyboardType={'numeric'}
                    ref={moneyInputRef}
                />
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
                    <Pressable onPress={() => dispatch(openCategoryModal())} style={{width: '100%', height: '100%'}}/>
                </CategorySelect>
                <CategoryScreen/>
                <Divider/>
                <StyledCategoryButton>
                    <Icon as={MaterialCommunityIcons} name={'note-edit-outline'}
                          size={'2xl'}></Icon>
                    <BottomSheetTextInput style={{width: '100%'}}/>
                </StyledCategoryButton>
                <Divider/>
                <View style={styles.addExpenseButtonContainerStyle}>
                    <Button style={styles.addExpenseButtonStyle}
                            label={'Dodaj'}
                            size={Button.sizes.large}
                            enableShadow
                    />
                </View>
            </ActionSheetInnerContainer>
        </ActionSheetContainer>
    )
}

const styles = StyleSheet.create({
    segmentStyle: {
        marginTop: 15,
        borderColor: 'white',
    },
    moneyInputContainerStyle: {
        height: 100
    },
    moneyInputInnerContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    moneyInputStyle: {
        fontSize: 50,
        lineHeight: 50,
    },
    moneyInputPrefixStyle: {

    },
    moneyInputSuffixStyle: {
        marginLeft: 5
    },
    currencyChipContainerStyle: {
        borderColor: 'white',
        borderWidth: 1
    },
    currencyChipLabelStyle: {
        color: 'white'
    },
    addExpenseButtonContainerStyle: {
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addExpenseButtonStyle: {
        width: '100%'
    }
});

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
  padding: 0 15px;
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
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`