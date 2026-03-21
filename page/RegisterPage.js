import {useState} from 'react'
import {View, StyleSheet} from 'react-native'
// import { useNavigation } from '@react-navigation/native';

import Input, { ConfirmButton, Tips, NavBar } from '../components/Login'

export default function RegisterPage({ navigation }) {

    // const navigation = useNavigation();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const onLogin = () => {
        if(userName === '' || password === ''){
            setMsg('The username or password cannot be empty.');
            return ;
        }
        setMsg('');
    }

    const NavigateLogin = () => {
        navigation.navigate("LoginPage");
    }

    return (
        <View style={styles.root}>
            <NavBar title="Register" rightTitle="Register" onRightClick={NavigateLogin}/>
            <View style={styles.line}/>
            <View style={styles.content}>
                <Input 
                    label="Username" 
                    placeholder="please input username" 
                    secure={false}
                    shortLine={true} 
                    onChangeText={(txt) => setUserName(txt)} 
                />
                <Input 
                    label="Password" 
                    placeholder="please input password" 
                    secure={true}
                    shortLine={false} 
                    onChangeText={(txt) => setPassword(txt)} 
                />
                <ConfirmButton title="Register" onClick={onLogin}/>
                <Tips msg={msg}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: 30
    },
    content: {
        paddingTop: 20,
        backgroundColor: '#F1F5F6',
        flexGrow: 1
    },
    line: {
        height: 0.5,
        backgroundColor: '#D0D4D4'
    }
})