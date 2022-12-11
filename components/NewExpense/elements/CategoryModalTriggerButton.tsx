import {Box, Icon, Pressable} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {openCategoryModal} from "../../../store";
import React from "react";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";

export const CategoryModalTriggerButton = () => {

    const dispatch = useDispatch()

    return (
        <Box style={styles.categoryModalTriggerButtonStyles}>
            <Icon as={MaterialCommunityIcons} name={'grid'} size={'2xl'}/>
            <Pressable onPress={() => dispatch(openCategoryModal())} style={{width: '100%', height: '100%'}}/>
        </Box>
    )
}

const styles = StyleSheet.create({
    categoryModalTriggerButtonStyles: {
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})