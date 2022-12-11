import {Box, Divider, Icon, Pressable, Text} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import React, {useState} from "react";
import RNDateTimePicker, {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {StyleSheet} from "react-native";

export const DateSelect = () => {

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

    return (
        <>
            <Box style={styles.dateTriggerButtonStyles}>
                <Icon as={MaterialCommunityIcons}
                      name={'calendar'}
                      size={'2xl'}/>
                <Pressable onPress={toggleDatePicker}>
                    <Text fontSize={16}>{date.toDateString()}</Text>
                </Pressable>
            </Box>
            <Divider/>
            <Animated.View style={[animationStyle]}>
                <RNDateTimePicker style={styles.calendarPickerStyles}
                                  onChange={handleDateChange}
                                  themeVariant={'dark'}
                                  value={date}
                                  display={'spinner'}/>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    dateTriggerButtonStyles: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        alignItems: "center"
    },
    calendarPickerStyles: {
        width: "100%",
        height: "100%"
    }
})
