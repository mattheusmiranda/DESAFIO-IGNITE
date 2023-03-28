import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '89%',
        backgroundColor: '#262626',
        borderRadius: 11,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 16,
        padding: 7,
    },
    name: {
        color: '#F2F2F2',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 30
    }
})