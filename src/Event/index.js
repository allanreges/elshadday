import React, { useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions'
import Geolocation from '@react-native-community/geolocation'
import { ActivityIndicator } from 'react-native'
import api from '../services/api'
import { Container, Header, Avatar, Name, Bio, Map } from './styles'



export default function Event({ navigation }) {
    const [event, setEvent] = useState('')
    const [loading, setLoading] = useState(true)
    const [coordinates, setCoordinates] = useState({})

    useEffect(() => {
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                setCoordinates(coords)
                // console.tron.log(coords)
                setLoading(false)
            }
        )
        handleData()
    }, [event])

    function handleData() {
        setEvent(navigation.getParam('event'))
    }

    return (
        <Container>
            <Header>
                <Avatar source={{ uri: event.icon }} />
                <Name>{event.title}</Name>
                <Bio>{event.description}</Bio>
            </Header>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                    <Map
                        initialRegion={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.001,
                            longitudeDelta: 0.001,
                        }}
                    >
                        <MapViewDirections origin={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                        }} destination={{
                            latitude: event.localization.latitude,
                            longitude: event.localization.longitude,
                        }}
                            apikey="AIzaSyD2a2ng9QWRhJZZeUKyMaRyYCEl7iE4PyE"
                            strokeWidth={3}
                            strokeColor="red"
                        />
                    </Map>
                )}

        </Container>
    );
}

Event.navigationOptions = {
    title: ''
}

