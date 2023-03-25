
import { StyleSheet } from "react-native"
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


});

