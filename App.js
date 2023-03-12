import react from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default function App() {
  
 const PickFromGallary= async ()=>{
 const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
  if(granted){
    let data = await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.Images,
    allowsEditing:true,
    aspect:[4,4],
    quality:1

  })
  console.log(data)
 }else{
  Alert.alert("Please give us permission")
 }
 }

 const PickFromCamera= async ()=>{
  const {granted} = await Permissions.askAsync(Permissions.CAMERA)
   if(granted){
     let data = await ImagePicker.launchCameraAsync({
     mediaTypes:ImagePicker.MediaTypeOptions.Images,
     allowsEditing:true,
     aspect:[4,4],
     quality:1
 
   })
   console.log(data)
  }
    else
    {
    Alert.alert("Please give us permission")
    }
  }

  return (
    <View style={styles.container}>
      <View style={{justifyContent:"center",alignItems:"center"}}>  

      <Image style={styles.Image}
      source={{uri: 'https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823__340.png' }}/>

      <TouchableOpacity style={styles.fileupload} onPress={()=> PickFromGallary()}   >
      <Text style={styles.buttontext}>Choose File From Galary</Text></TouchableOpacity>

      <TouchableOpacity style={styles.fileupload}onPress={()=> PickFromCamera()}   >
      <Text style={styles.buttontext}>Choose File From Camera</Text></TouchableOpacity>

      <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>SUBMIT</Text></TouchableOpacity>
      </View>
    </View>
  );
}
