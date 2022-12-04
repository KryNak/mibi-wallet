import {Divider, HStack, Icon, Modal} from "native-base";
import {colors} from "../colors";
import {Avatar, ExpandableSection, ListItem} from "react-native-ui-lib";
import {useDispatch, useSelector} from "react-redux";
import {closeCategoryModal, RootState} from "../store";
import styled, {css} from "styled-components";
import {useState} from "react";
import {Text} from "react-native";
import {categories, Category} from "../categories-seed";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const CategoryScreen = () => {

    const isOpen = useSelector((rootState: RootState) => rootState.app.isCategoryModalOpen);
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(closeCategoryModal())
    }

    const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

    const isPresent: (category: Category) => boolean = (category: Category) => {
        return Boolean(expandedCategories.find(it => it === category.title))
    }

    const toggle = (category: Category) => {
        if (isPresent(category)) {
            setExpandedCategories(expandedCategories.filter(e => e !== category.title))
            return;
        }

        setExpandedCategories(prev => [...prev, category.title])
    }

    return (
        <Modal justifyContent={'flex-start'} animationPreset={'fade'} size={'full'} isOpen={isOpen}
               onClose={closeModal}>
            <StyledModalContent>
                <StyledModalCloseButton/>
                <StyledModalHeader>Wybierz kategorię</StyledModalHeader>
                <Modal.Body>
                    {categories.map((category, i) => {
                        return (
                            <ExpandableSection
                                key={i}
                                expanded={isPresent(category)}
                                sectionHeader={(
                                    <>
                                        <StyledRow>
                                            <StyledSectionHeader>
                                                {category.title}
                                            </StyledSectionHeader>
                                            <Icon size={'lg'}
                                                  as={MaterialCommunityIcons}
                                                  name={isPresent(category) ? 'eye' : 'eye-off'}
                                            />
                                        </StyledRow>
                                        <Divider/>
                                    </>
                                )}
                                onPress={() => toggle(category)}>
                                {category.subcategories.map((subcategory, j) => {
                                    return (
                                        <StyledListItem key={j}>
                                            <ListItem.Part>
                                                <Avatar backgroundColor={category.color}
                                                        containerStyle={{marginRight: 12}}
                                                        size={40}>
                                                    <Icon size={'xl'}
                                                          as={MaterialCommunityIcons}
                                                          name={subcategory.icon}/>
                                                </Avatar>
                                            </ListItem.Part>
                                            <ListItem.Part>
                                                <StyledSubcategoryText>
                                                    {subcategory.title}
                                                </StyledSubcategoryText>
                                            </ListItem.Part>
                                        </StyledListItem>
                                    )
                                })}
                            </ExpandableSection>
                        )
                    })}
                </Modal.Body>
            </StyledModalContent>
        </Modal>
    )
}

const StyledRow = styled(HStack)`
  margin: 10px 0;
  justify-content: space-between;
`

const StyledSectionHeader = styled(Text)`
  font-size: 20px;
  color: white;
`

const StyledSubcategoryText = styled(Text)`
  font-size: 16px;
  color: white;
`

const StyledListItem = styled(ListItem)`
  width: 100%;
`

const StyledModalContent = styled(Modal.Content)`
  background-color: ${colors.secondary};
  flex: 1;
  min-height: 100%;
`

const ModalHeaderShared = css`
  margin-top: 35px;
`

const StyledModalHeader = styled(Modal.Header)`
  ${ModalHeaderShared};
  background-color: ${colors.secondary};
`

const StyledModalCloseButton = styled(Modal.CloseButton)`
  ${ModalHeaderShared};
`