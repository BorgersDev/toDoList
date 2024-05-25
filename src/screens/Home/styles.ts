import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding:  24
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 36,
        marginBottom: 42
    },
    titleText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    placeHolder: {
        color:"#808080"
    },
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1C1C1C",
        padding: 10,
        fontWeight: "bold",
        marginRight: 6
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: "#4F4F4F",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    emptyText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center'
    }
})