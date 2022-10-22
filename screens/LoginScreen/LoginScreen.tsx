import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { styles } from './style';
import { images } from "../../utils/Images";
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignUp } from '../SignUpScreen/SignUpScreen';

export const Login = (props: any) => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    async function signIn() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("Logged in Success: ", userCredential);
                // console.log("Logged in Success: ", user);
                navigation.navigate('Home')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(error.message)
            });
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
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInputstyle}
                        placeholder="Enter your Password"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={!showPassword}
                    />

                </View>
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: 10 }}>
                    {!showPassword ?
                        <Image
                            style={styles.styleImage}
                            source={images.visibility}
                        /> :
                        <Image
                            style={styles.styleImage}
                            source={images.eye_open}
                        />}
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.styleButton}
                // onPress={() =>navigation.navigate('Home')}
                onPress={() => signIn()}
            >
                <Text style={styles.loginbtn}>Login</Text>
            </TouchableOpacity>


            <View style={{ flexDirection: 'row', alignSelf: 'center', top: 8 }}>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ textAlign: 'center', color: 'red', left: 10, fontSize: 18 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}