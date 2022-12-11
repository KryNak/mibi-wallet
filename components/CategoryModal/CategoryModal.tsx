import {Divider, HStack, Icon} from "native-base";
import {colors} from "../../colors";
import {Avatar, Dash, ExpandableSection, ListItem, Modal} from "react-native-ui-lib";
import {useDispatch, useSelector} from "react-redux";
import {closeCategoryModal, RootState} from "../../store";
import {useState} from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import {categories, Category} from "../../categories-seed";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const CategoryModal = () => {

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
        <Modal containerStyle={styles.modalStyle}
               visible={isOpen}
               overlayBackgroundColor={styles.modalBackgroundColor.backgroundColor}>
            <Modal.TopBar
                containerStyle={styles.modalTopBarStyle}
                title={"Wybierz kategorię"}
                titleStyle={styles.modalTitleStyle}
                onCancel={closeModal}
                cancelButtonProps={{iconStyle: {tintColor: 'white'}}}
            />
            <Dash containerStyle={styles.dashStyle} gap={10} length={1000} thickness={1} color={'white'}/>
            <ScrollView style={styles.scrollViewStyle}>
                {categories.map((category, i) => {
                    return (
                        <ExpandableSection
                            key={i}
                            expanded={isPresent(category)}
                            sectionHeader={(
                                <>
                                    <HStack style={styles.rowStyle}>
                                        <Text style={styles.sectionHeaderStyle}>
                                            {category.title}
                                        </Text>
                                        <Icon size={'lg'}
                                              as={MaterialCommunityIcons}
                                              name={isPresent(category) ? 'eye' : 'eye-off'}
                                        />
                                    </HStack>
                                    <Divider/>
                                </>
                            )}
                            onPress={() => toggle(category)}>
                            {category.subcategories.map((subcategory, j) => {
                                return (
                                    <ListItem key={j}>
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
                                            <Text style={styles.sectionSubcategoryStyle}>
                                                {subcategory.title}
                                            </Text>
                                        </ListItem.Part>
                                    </ListItem>
                                )
                            })}
                        </ExpandableSection>
                    )
                })}
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalTopBarStyle: {
        marginTop: 45
    },
    modalTitleStyle: {
        color: 'white',
        textTransform: 'uppercase'
    },
    modalStyle: {
        paddingHorizontal: 10
    },
    modalBackgroundColor: {
        backgroundColor: colors.background_primary
    },
    dashStyle: {
        marginTop: 10,
        marginBottom: 5
    },
    scrollViewStyle: {
        paddingHorizontal: 15,
        marginBottom: 30
    },
    sectionHeaderStyle: {
        fontSize: 20,
        color: 'white'
    },
    sectionSubcategoryStyle: {
        fontSize: 16,
        color: 'white'
    },
    rowStyle: {
        marginVertical: 10,
        justifyContent: 'space-between'
    }
})