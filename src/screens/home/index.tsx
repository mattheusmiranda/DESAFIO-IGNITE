import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { Participant } from './components/participant/participant';
import { styles } from './style';

export default function Home() {

    const participants = ['arrozsdfhsjdfhsdjfhsdjfhjshfjshfjshfjshdfjshdfjshdfjsdhfjsahfjsdhfjshfjs', 'arrozsdfhsjdfhsdjfhsdjfhjshfjshfjshfjshdfjshdfjshdfjsdhfjsahfjsdhfjshfjso',
        'n']

    function handleAddParticipant() {
        console.log("voce adicionou um participant");
    }

    function handleRemoveParticipant() {
        console.log("voce clicou em remover");
    }
    return (

        <View style={styles.container}>

            <View style={styles.top}>
                <View style={styles.todo}>
                    <Text style={styles.to}>to</Text>
                    <Text style={styles.do}>do</Text>
                </View>

                <Text>Home</Text>
            </View>

            <View style={styles.bottom}>

                <View style={styles.inp}>
                    <TextInput
                        style={[styles.input]}
                        placeholder="Adicione uma nova tarefa."
                        placeholderTextColor={'#808080'} />

                    <TouchableOpacity style={styles.buttonText} onPress={handleAddParticipant}>
                        <Text style={styles.icon}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contagem}>
                    <Text style={styles.elemento1}>
                        Criadas
                    </Text>
                    <Text style={styles.idtContagem}>6</Text>
                    <Text style={styles.elemento2}>
                        Concluidas
                    </Text>
                    <Text style={styles.idtContagem}>6</Text>
                </View>

                <FlatList
                    data={participants}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Participant
                            key={item}
                            name={item}
                            onRemove={() => handleRemoveParticipant}
                        />

                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmptyText0}>
                            <Text style={styles.listEmptyText1}>
                                Você ainda não tem tarefas cadastradas
                            </Text>

                            <Text style={styles.listEmpytText2}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View >

                    )}
                />

            </View>

        </View >

    );
}