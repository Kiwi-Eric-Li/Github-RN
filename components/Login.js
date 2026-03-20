import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'


const Input = (props) => {
    const {label, placeholder, shortLine, secure, onChangeText} = props;
    return (
        <View style={{'backgroundColor': 'white'}}>
            <View style={styles.row}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder={placeholder} 
                    secureTextEntry={secure}
                    autoCapitalize={'none'} 
                    onChangeText={onChangeText}
                />
            </View>
            <View 
                style={{
                    height: StyleSheet.hairlineWidth,
                    width: '100%',
                    backgroundColor: '#D0D4D4',
                    marginLeft: shortLine ? 20 : 0
                }}
            />
        </View>
    )
}

export const ConfirmButton = (props) => {
    const {title, onClick} = props;
    return (
        <TouchableOpacity style={styles.confirmLayout} onPress={onClick}>
            <Text style={styles.confirmTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export const Tips = (props) => {
    const {msg} = props;
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tips}>{msg}</Text>
        </View>
    )
}

export const NavBar = (props) => {
    const {title, rightTitle, onRightClick} = props;

    return (
        <View style={styles.navBar}>
            <View />
            <View style={styles.titleLayout}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.rightTitle}>{rightTitle}</Text>
        </View>
    )


}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16,
        width: 90
    },
    input: {
        flex: 1,
        marginRight: 15
    },
    confirmLayout: {
        backgroundColor: '#2196f3',
        alignItems: 'center',
        padding: 12,
        margin: 20,
        marginTop: 30,
        borderRadius: 5
    },
    confirmTitle: {
        color: '#fff',
        fontSize: 20
    },
    tipsLayout: {
        alignItems: 'center',
        marginTop: 10
    },
    tips: {
        fontSize: 14,
        color: 'red'
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44,
        marginLeft: 10,
        marginRight: 10
    },
    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    rightTitle: {
        color: '#2196f3'
    }
})


export default Input;