import {Chip, MaskedInput, TouchableOpacity, View} from "react-native-ui-lib";
import React from "react";
import {InputAccessoryView, Keyboard, StyleSheet} from "react-native";
import {colors} from "../../../colors";
import {Text} from "native-base";

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

export const MoneyInput = () => {

    const inputAccessoryViewID = 'moneyInputID';

    return (
        <>
            <MaskedInput
                containerStyle={styles.moneyInputContainerStyle}
                renderMaskedText={renderPrice}
                formatter={(value: string) => value?.replace(/\D/g, '')}
                inputAccessoryViewID={inputAccessoryViewID}
                keyboardType={'numeric'}
                keyboardAppearance={'dark'}
            />
            <InputAccessoryView nativeID={inputAccessoryViewID}>
                <View style={styles.inputAccessoryContainerStyle}>
                    <TouchableOpacity
                        onPress={Keyboard.dismiss}
                        style={styles.inputAccessoryHideButtonStyle}
                    >
                        <Text>Done</Text>
                    </TouchableOpacity>
                </View>
            </InputAccessoryView>
        </>

    )
}

const styles = StyleSheet.create({
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
    moneyInputPrefixStyle: {},
    moneyInputSuffixStyle: {
        marginLeft: 5
    },
    currencyChipContainerStyle: {
        borderColor: colors.secondary,
        borderWidth: 1
    },
    currencyChipLabelStyle: {
        color: 'white'
    },
    inputAccessoryContainerStyle: {
        display: 'flex',
        flexDirection: 'row-reverse',
        height: 50,
        alignItems: 'center',
        borderRadius: 0,
        backgroundColor: colors.background_secondary,
        borderTopColor: '#525252',
        borderTopWidth: 1
    },
    inputAccessoryHideButtonStyle: {
        marginRight: 10,
        width: 40,
        height: 40,
        borderRadius: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})