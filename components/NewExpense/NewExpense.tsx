import {Divider, Stack} from "native-base";
import React from "react";
import {CategoryModal} from "../CategoryModal/CategoryModal";
import {Button, View} from "react-native-ui-lib";
import {StyleSheet} from "react-native";
import {MoneyInput} from "./elements/MoneyInput";
import {DateSelect} from "./elements/DateSelect";
import {NoteInput} from "./elements/NoteInput";
import {CategoryModalTriggerButton} from "./elements/CategoryModalTriggerButton";
import {ScreenTabSelect} from "./elements/ScreenTabSelect";

export const NewExpense = () => {

    return (
        <Stack style={styles.actionSheetContainerStyles}>
            <Stack style={styles.actionSheetInnerContainerStyles}>
                <ScreenTabSelect/>
                <MoneyInput/>
                <Divider/>
                <DateSelect/>
                <Divider/>
                <CategoryModalTriggerButton/>
                <CategoryModal/>
                <Divider/>
                <NoteInput/>
                <Divider/>
                <View style={styles.addExpenseButtonContainerStyle}>
                    <Button style={styles.addExpenseButtonStyle}
                            label={'Dodaj'}
                            size={Button.sizes.large}
                            enableShadow
                    />
                </View>
            </Stack>
        </Stack>
    )
}

const styles = StyleSheet.create({
    addExpenseButtonContainerStyle: {
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addExpenseButtonStyle: {
        width: '100%'
    },
    actionSheetContainerStyles: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    actionSheetInnerContainerStyles: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 0
    }
});