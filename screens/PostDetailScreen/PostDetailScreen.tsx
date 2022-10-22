import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { styles } from './style';
import { images } from "../../utils/Images";
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetByNameQuery } from '../../apiData/postAPI';

export const PostDetail = (props: any) => {
    const navigation = useNavigation();

    const route = useRoute();
    const post_id = route.params;
    // console.log('postii', post_id);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image
                        style={styles.backbtn}
                        source={images.back}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <View style={{ flex: 2 }}>
                    <Text style={styles.hdrText}>Detail Screen</Text>
                </View>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.TitleText}>{post_id.item.id}.  <Text style={styles.TitleText}>{post_id.item.title}</Text></Text>
                <Text style={styles.bodyText}>Body : {post_id.item.body}</Text>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: '#cecece', height: 40, width: '80%', bottom: 100, justifyContent: 'center', position: 'absolute' }}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.hdrText}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
}