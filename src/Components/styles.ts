import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container: {
        width: '100%',
        flexDirection: 'row',
        height: 56,
        backgroundColor: "#1C1C1C",
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
     },
     text: {
        color: '#FFF',
        flex: 1,
        paddingLeft: 13,
        
     },
     button: {
        height: 56,
        width: 56,
        backgroundColor: "#FF6347",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})