import {useState} from 'react'
import {View, StyleSheet} from 'react-native'

import Input, { ConfirmButton, Tips, NavBar } from '../components/Login'

export default () => {

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

    return (
        <View style={styles.root}>
            <NavBar title="Login" rightTitle="Register"/>
            <View style={styles.line}/>
            <View style={styles.content}>
                <Input 
                    label="Username" 
                    placeholder="please input username" 
                    shortLine={true} 
                    onChangeText={(txt) => setUserName(txt)} 
                />
                <Input 
                    label="Password" 
                    placeholder="please input password" 
                    secure={true}
                    onChangeText={(txt) => setPassword(txt)} 
                />
                <ConfirmButton title="Login" onClick={onLogin}/>
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