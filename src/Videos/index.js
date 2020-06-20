import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, VideosList, Video } from './styles';
import api from '../services/api'


export default function Videos() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleData()
    }, [])

    async function handleData() {
        setLoading(true)
        const response = await api.get('/lives')
        setData(response.data.lives)
        setLoading(false)
    }


    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (<VideosList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) =>
                <Video
                    javaScriptEnabled
                    domStorageEnabled
                    origin="http://www.youtube.com"
                    source={{ uri: `https://www.youtube.com/embed/${item.url}` }}
                />
            } />)}
        </Container>
    );
}

Videos.navigationOptions = {
    tabBarLabel: 'Pregações',
    tabBarIcon: ({ tintColor }) => <Icon name="airplay" size={20} color={tintColor} />
}
