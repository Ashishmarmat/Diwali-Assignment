import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { styles } from './style';
import { images } from "../../utils/Images";
import { useNavigation } from '@react-navigation/native';
import { useGetListQuery } from "../../apiData/postAPI";

export const Home = (props: any) => {
    const navigation = useNavigation();
    const [datas, setData] = useState<any>([])
    const [page, setPage] = useState<number>(0)

    let postList = useGetListQuery(page);

    useEffect(() => {
        let { data, isSuccess } = postList;
        if (isSuccess) {
            let res = [data.results, data.results];
            setData({ ...data, results: [...res] })
        }
    }, [postList])

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.hdrText}>Home Screen</Text>
            </View>
            <FlatList
                numColumns={1}
                data={postList.data}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{ top: 30, justifyContent: 'center' }}
                        onPress={() => navigation.navigate('PostDetail', {item})}
                    >
            <View style={styles.cardView}>
                <Text style={styles.TitleText}>{item.id}.  <Text style={styles.TitleText}>{item.title}</Text></Text>
            </View>

        </TouchableOpacity>
    )
}
/>
        </SafeAreaView >
    )
}
