
import { StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    top: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    bottom: {
        flex: 3,
        backgroundColor: '#1A1A1A'
    },
    inp: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: -22,
        marginBottom: 42
    },
    input: {
        flex: 0.9,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        marginLeft: 15,
    },
    buttonText: {
        color: '#ffffff',
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    todo: {
        flexDirection: 'row',
        marginTop: 32,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    to: {
        color: '#42a3df',
        fontWeight: 'bold',
        fontSize: 55
    },
    do: {
        fontWeight: 'bold',
        color: '#6f72ff',
        fontSize: 55
    },
    icon: {
        fontSize: 22,
        color: 'white'
    },
    contagem: {
        flexDirection: 'row',


    },
    elementos: {
        position: 'relative',
    },
    elemento1: {
        fontWeight: 'bold',
        marginTop: -18,
        fontSize: 17,
        color: '#4EA8DE',
        marginLeft: 15,
        marginRight: 1
    },
    elemento2: {

        fontWeight: 'bold',
        marginTop: -18,
        fontSize: 17,
        color: '#8284FA',
        marginLeft: 170
    },
    listEmptyText0: {
        marginTop: 70,
        alignItems: 'center',
    },
    listEmptyText1: {
        fontSize: 17,
        color: '#808080',
        fontWeight: "bold",
        marginTop: 10

    },
    listEmpytText2: {
        color: '#808080',
        fontSize: 15
    },
    idtContagem: {
        backgroundColor: '#333333',
        marginLeft: 15,
        marginTop: -15,
        width: 25,
        height: 20,
        textAlign: 'center',
        justifyContent: "center",
        color: '#D9D9D9',
        borderRadius: 10
    },
    img: {
        color: '#2023d6',
        fontSize: 35,
        marginTop: 10,
        marginRight: 10
    },
    flatListContainer: {
        flex: 1,
    },
    icons: {
        fontSize: 60,
        color: "#ffff",
    },
    separator: {
        height: 0.8,
        width: '90%',
        backgroundColor: '#CED0CE',
        marginVertical: 10,
        marginLeft: 18

    },


});

