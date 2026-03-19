import {useState} from 'react'
import {TouchableWithoutFeedback, View, Text, TextInput, StyleSheet, Keyboard, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App_1(){
    const [text, setText] = useState("");
    const [num, setNum] = useState(null);
    const [showText, setShowText] = useState("");

    const onSave = async () => {
        try{
            await AsyncStorage.setItem("KEY", text);
        }catch(error){
            console.log(error);
        }
    }

    const onGet = async () => {
        try{
            const value = await AsyncStorage.getItem("KEY");
            setShowText(value);
        }catch(e){
            console.log(e);
        }
    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder='请输入内容' 
                    value={text}
                    onChangeText={(t) => setText(t)} />
                <TouchableOpacity style={styles.button} onPress={onSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onGet}>
                    <Text style={styles.buttonText}>Get</Text>
                </TouchableOpacity>
                <Text>Result: {showText}</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='请输入数字' 
                    value={num}
                    onChangeText={(t) => setNum(t)} 
                    keyboardType='numeric' 
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    button: {
        backgroundColor: "blue",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        fontSize: 16,
        color: "#fff"
    }
})