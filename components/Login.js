import {View, Text, TextInput, StyleSheet} from 'react-native'


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
    }
})


export default Input;