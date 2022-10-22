import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#fff'
          },
          styleLogo:{
            width: 200,
            height: 200,
            resizeMode: "contain",
          },
          inputView: {
            width: '80%',
            height: 45,
            borderBottomWidth:1,
            // borderWidth: 1,
            borderColor: "#9a9a9a",
            // borderRadius: 10,
            margin: 10,
            paddingHorizontal: 10,
          },
          textInputstyle: {
            fontSize: 20,
            height: 45,
          },
          styleButton: {
            width: '50%',
            height: 40,
            margin: 5,
            borderRadius: 10,
            backgroundColor: '#b352bf'
          },
          styleImage: {
            width: 20,
            height: 20,
            resizeMode: "contain"
          },
          textStyle: {
            fontSize: 20
          },
          SignUpText:{
            fontSize: 20
          },
          loginbtn: {
            textAlign: 'center',
            top: 8,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
          },
});
