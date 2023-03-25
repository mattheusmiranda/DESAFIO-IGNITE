import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './style';



export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.top}>

                <Image source={require:''}/>   teste


                <Text>Home</Text>
            </View>

            <View style={styles.bottom}>

                <View style={styles.inp}>
                    <TextInput
                        style={[styles.input]}
                        placeholder="Adicione uma nova tarefa."
                        placeholderTextColor={'#808080'} />

                    <TouchableOpacity style={styles.buttonText}>
                        <Text>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );
}

