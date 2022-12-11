import {HStack, Input} from "native-base";
import React from "react";
import {StyleSheet} from "react-native";
import {IconAvatar} from "../../shared/IconAvatar";

export const NoteInput = () => {
    return (
        <HStack style={styles.categoryButtonStyle}>
            <IconAvatar iconName={"note-edit-outline"}
                        iconColor={styles.iconColorStyle.color}
                        iconSize={"md"}
                        avatarBackgroundColor={styles.avatarBackgroundColorStyle.backgroundColor}/>
            <Input style={{width: '100%'}}/>
        </HStack>
    )
}

const styles = StyleSheet.create({
    categoryButtonStyle: {
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconColorStyle: {
        color: "red"
    },
    avatarBackgroundColorStyle: {
        backgroundColor: "#ffda4f"
    }
})