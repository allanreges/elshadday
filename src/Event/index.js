import React, { useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions'
import Geolocation from '@react-native-community/geolocation'
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api'
import { Container, List, Item, Bg, Text, Description } from './styles'



export default function Event({ navigation }) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        handleData()
    }, [])

    async function handleData() {
        const response = await api.get('/events')
        setData(response.data.events)
        setLoading(false)
    }

    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (<List data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) =>
                <Bg source={{ uri: `${item.images[0].path}` }}>
                    <Item ><Text>{item.name}</Text><Description>{item.description}</Description></Item>
                </Bg>
            } />)}
        </Container >
    );
}
Event.navigationOptions = {
    tabBarLabel: 'Programação',
    tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />
}
