import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { CheckBox } from 'react-native-elements';
import { useState } from "react";

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
                    checkedIcon={"dot-circle-o"}
                    uncheckedIcon={"check"}
                    checkedColor={"#5E60CE"}
                    uncheckedColor={"#4EA8DE"}
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}
                />
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
