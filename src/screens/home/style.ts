
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    to: {
        color: '#4EA8DE',
        fontWeight: '800',
        fontSize: 42
    },
    do: {
        fontWeight: 'bold',
        color: '#8284FA',
        fontSize: 42
    },
    icon: {
        fontSize: 25
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
        marginLeft: 15
    },
    elemento2: {
        fontWeight: 'bold',
        marginTop: -18,
        fontSize: 17,
        color: '#8284FA',
        marginLeft: 170
    },
    listEmptyText0: {
        marginTop: 134,
        alignItems: 'center',
    },
    listEmptyText1: {
        fontSize: 17,
        color: '#808080',
        fontWeight: "bold",

    },
    listEmpytText2: {
        color: '#808080',
        fontSize: 15
    }

});

