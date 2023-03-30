import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '91%',
        backgroundColor: '#262626',
        borderRadius: 11,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: -8,
        marginLeft: 16,
        padding: 7,
    },
    isideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -10,
        marginRight: -10,
    },
    name: {
        color: '#F2F2F2',
        flex: 1,
        fontSize: 16,
        marginLeft: -10,
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#808080',
        fontSize: 17,
        marginRight: 11
    },
    checked: {
        padding: 0,
        marginLeft: 0,
    },
    emptyCircle: {

    }
})