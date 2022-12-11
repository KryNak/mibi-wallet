import {HStack, Icon} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {BottomSheetTextInput} from "@gorhom/bottom-sheet";
import React from "react";
import styled from "styled-components";

export const NoteInput = () => {
    return (
        <StyledCategoryButton>
            <Icon as={MaterialCommunityIcons} name={'note-edit-outline'}
                  size={'2xl'}></Icon>
            <BottomSheetTextInput style={{width: '100%'}}/>
        </StyledCategoryButton>
    )
}

const StyledCategoryButton = styled(HStack)`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`