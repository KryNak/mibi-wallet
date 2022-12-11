import {SegmentedControl} from "react-native-ui-lib";
import React from "react";
import {StyleSheet} from "react-native";
import {colors} from "../../../colors";

export const ScreenTabSelect = () => {

    const segments = [{label: 'Wydatek'}, {label: 'Przychód'}, {label: 'Przelew'}]

    return (
        <SegmentedControl
            backgroundColor={styles.segmentBackgroundColor.backgroundColor}
            segments={segments}
            inactiveColor={'white'}
            style={styles.segmentStyle}
        />
    )
}

const styles = StyleSheet.create({
    segmentStyle: {
        marginTop: 15,
        borderColor: colors.secondary,
    },
    segmentBackgroundColor: {
        backgroundColor: colors.background_primary
    },
})