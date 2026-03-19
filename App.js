import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

export default function App() {
  const [localUri, setLocalUri] = useState("");

  const openImagePickerAsync = async () => {
    // 异步选择图片
    // 1. 获取权限
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(!permissionResult.granted){
      return;
    }
    // 2. 异步打开手机相册，让用户选择图片
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if(pickerResult.canceled){
      return;
    }
    setLocalUri(pickerResult.assets[0].uri);
  }

  const goBack = () => {
    setLocalUri("");
  }

  const openShareImageAsync = async () => {
    console.log(Platform.OS);
    await Sharing.shareAsync(localUri);
  }

  if(localUri){
    return (
      <View style={styles.container}>
        <Image source={{uri: localUri}} style={styles.thumbnail}/>
        <TouchableOpacity style={styles.button} onPress={openShareImageAsync}>
          <Text style={styles.buttonText}>分享图片</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>重新选择</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/android-icon-foreground.png')} style={styles.logo}/>
      <Text style={styles.instructions}>按下按钮，与朋友分享手机中的图片</Text>
      <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>选择图片</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    textAlign: 'center',
    marginBottom: 10
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
  },
  thumbnail: {
    width: 300,
    height: 300
  }
});
