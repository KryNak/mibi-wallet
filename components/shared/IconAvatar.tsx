import {Box, Icon} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React, {CSSProperties} from "react";
import {StyleSheet} from "react-native";
import {ThemeComponentSizeType} from "native-base/lib/typescript/components/types";
import {ResponsiveValue} from "native-base/src/components/types/responsiveValue";
import {IColors} from "native-base/src/theme/base/colors";


interface IconAvatarProps {
    iconSize: ThemeComponentSizeType<"Icon">,
    iconName: string,
    iconColor?: ResponsiveValue<IColors | (string & {})>,
    avatarBackgroundColor?: CSSProperties["backgroundColor"]
}

export const IconAvatar = ({iconSize, iconColor, avatarBackgroundColor, iconName}: IconAvatarProps) => {
    return (
        <Box style={styles({avatarBackgroundColor}).iconContainerStyle}>
            <Icon color={iconColor ?? "white"}
                  as={MaterialCommunityIcons}
                  name={iconName}
                  size={iconSize}
            />
        </Box>
    )
}

type StylesProps = Pick<IconAvatarProps, 'iconColor' | 'avatarBackgroundColor'>;

const styles = ({avatarBackgroundColor}: StylesProps) => StyleSheet.create({
    iconContainerStyle: {
        borderRadius: 10,
        backgroundColor: avatarBackgroundColor ?? "transparent",
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})