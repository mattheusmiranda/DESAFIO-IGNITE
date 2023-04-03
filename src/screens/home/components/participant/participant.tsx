import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";
import FontAwesomeIcon from 'react-native-vector-icons/Feather';

type Props = {
    name: string;
    onRemove: () => void;
    onSelect: (name: string) => void;
    isSelected: boolean;
}

export function Participant({ name, onRemove, onSelect, isSelected }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.isideContainer}>
                <CheckBox
                    checkedIcon={"check"}
                    uncheckedIcon={"dot-circle-o"}
                    checkedColor={"#5E60CE"}
                    uncheckedColor={"#4EA8DE"}
                    checked={isSelected}
                    onPress={() => onSelect(name)}
                />
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <FontAwesomeIcon name={'trash-2'} style={styles.buttonText} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
