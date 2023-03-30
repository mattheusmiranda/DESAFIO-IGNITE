import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";
import FontAwesomeIcon from 'react-native-vector-icons/Feather';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
    const [isSelected, setSelected] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.isideContainer}>
                <CheckBox
                    checkedIcon={"check"}
                    uncheckedIcon={"dot-circle-o"}
                    checkedColor={"#5E60CE"}
                    uncheckedColor={"#4EA8DE"}
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}
                />
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity style={styles.button} onPress={onRemove}>

                    <FontAwesomeIcon name={'trash-2'} style={styles.buttonText} />

                </TouchableOpacity>
            </View>
        </View>
    )
}
