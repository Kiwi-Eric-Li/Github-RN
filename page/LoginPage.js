import {useState} from 'react'
import {View, StyleSheet} from 'react-native'

import Input from '../components/Login'

export default () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.root}>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    content: {
        paddingTop: 20,
        backgroundColor: '#F1F5F6',
        flexGrow: 1
    }
})