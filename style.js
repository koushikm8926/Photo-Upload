import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileupload:{
     backgroundColor:'#2DD33E',
     borderRadius:20, 
     height:30, 
     width:300, 
     marginTop:20, 
     alignItems: 'center',
     justifyContent: 'center',
  },
  button:{
    width:300,
    height:50, 
    backgroundColor:"#4ED9FF",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
  },
  buttontext:{
    color:"black",
    fontSize:16,
    fontWeight:"700",
  },
  Image:{
    height:200,
    width:200,
    borderRadius:20,
  },
});

export default styles;
