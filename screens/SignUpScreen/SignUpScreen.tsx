import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { styles } from './style';
import { images } from "../../utils/Images";
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const SignUp = (props: any) => {
  const navigation = useNavigation();
  const auth = getAuth();

  const [valueForSignUp, setValueForSignUp] = useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (valueForSignUp.email === '' || valueForSignUp.password === '') {
      setValueForSignUp({
        ...valueForSignUp,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(auth, valueForSignUp.email, valueForSignUp.password);
      // console.log("Alert", response);
      navigation.navigate('Login');
      Alert.alert('Account Created Successfully', 'Please Verify your email id and login again', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      Alert.alert(error.message)
      setValueForSignUp({
        ...valueForSignUp,
        error: error.message,
      })
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.styleLogo}
          source={images.logo}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          keyboardType="email-address"
          style={styles.textInputstyle}
          placeholder="Enter your Email Address"
          value={valueForSignUp.email}
          onChangeText={(text) => setValueForSignUp({ ...valueForSignUp, email: text })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInputstyle}
          placeholder="Enter your Password"
          secureTextEntry={true}
          value={valueForSignUp.password}
          onChangeText={(text) => setValueForSignUp({ ...valueForSignUp, password: text })}
        />

      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.styleButton}
        onPress={() => signUp()}
      >
        <Text style={styles.loginbtn}>Submit</Text>
      </TouchableOpacity>


      <View style={{ flexDirection: 'row', alignSelf: 'center', top: 8 }}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ textAlign: 'center', color: 'blue', left: 10, fontSize: 18 }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}