import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList, Alert } from 'react-native';
import { Participant } from './components/participant/participant';
import { styles } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    const [numConcluidas, setNumConcluidas] = useState(0);
    const [allItems, setAllItems] = useState<string[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    function handleAddParticipant() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participant já existe');
        }

        setParticipants((prevState) => [...prevState, participantName]);
        setAllItems((prevState) => [...prevState, participantName]);
        setParticipantName('');
    }
    function handleRemoveParticipant(name: string) {
        Alert.alert('Remover', 'Deseja remover este item?', [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants((prevState) =>
                        prevState.filter((participant) => participant !== name)
                    );
                    setSelectedItems((prevState) =>
                        prevState.filter((item) => item !== name)
                    );
                    if (selectedItems.includes(name)) {
                        setNumConcluidas((prevNum) => prevNum - 1);
                    }
                    Alert.alert('Item removido com sucesso!');
                },
            },
            {
                text: 'Não',
            },
        ]);
    }

    function handleSelectItem(itemName: string) {
        if (selectedItems.includes(itemName)) {
            setSelectedItems((prevState) => prevState.filter((item) => item !== itemName));
            setNumConcluidas((prevState) => prevState - 1);
        } else {
            setSelectedItems((prevState) => [...prevState, itemName]);
            setNumConcluidas((prevState) => prevState + 1);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.todo}>
                    <FontAwesome name="rocket" style={styles.img} />
                    <Text style={styles.to}>to</Text>
                    <Text style={styles.do}>do</Text>
                </View>

            </View>

            <View style={styles.bottom}>
                <View style={styles.inp}>
                    <TextInput
                        style={[styles.input]}
                        placeholder="Adicione uma nova tarefa."
                        placeholderTextColor={'#808080'}
                        onChangeText={setParticipantName}
                        value={participantName}
                    />

                    <TouchableOpacity style={styles.buttonText} onPress={handleAddParticipant}>
                        <Icon name="add-circle-outline" style={styles.icon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contagem}>
                    <Text style={styles.elemento1}>Criadas: {participants.length}</Text>
                    <Text style={styles.elemento2}>Concluídas: {numConcluidas}</Text>
                </View>

                <View style={styles.separator} />

                <FlatList
                    data={participants}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Participant
                            key={item}
                            name={item}
                            onRemove={() => handleRemoveParticipant(item)}
                            onSelect={() => handleSelectItem(item)}
                            isSelected={selectedItems.includes(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmptyText0}>
                            <Icon name="book" style={styles.icons} />
                            <Text style={styles.listEmptyText1}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.listEmpytText2}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </View>
        </View>
    );
}