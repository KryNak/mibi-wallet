import {Button, Text, View} from "react-native";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {purgeUserTokens} from "./store";

export const Protected = () => {

    const StyledView = styled(View)`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    `

    const dispatch = useDispatch()

    return (
        <StyledView>
            <Text>Protected</Text>
            <Button onPress={() => dispatch(purgeUserTokens())} title={"Logout"}></Button>
        </StyledView>
    )
}
