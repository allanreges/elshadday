import React, { useEffect, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions'
import Geolocation from '@react-native-community/geolocation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-get-random-values';
import { View, Text, ActivityIndicator, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import YouTube from 'react-native-youtube';
import { WebView } from 'react-native-webview';
import Bg from '../files/img/homeBg.jpg'
import { Container, Background, BgPicture, Title, SubTitle, TextTitle, Video, Map, MainContainer } from './styles';
import api from '../services/api'


export default function Location(props) {

    const [loading, setLoading] = useState(true)
    const [coordinates, setCoordinates] = useState({})

    useEffect(() => {
        setLoading(true)
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                setCoordinates(coords)
                // console.tron.log(coords)

            },
        )
        setLoading(false)

    }, [])


    return (
        <>
            <Container>
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                        <Map
                            initialRegion={{
                                latitude: coordinates && coordinates.latitude,
                                longitude: coordinates && coordinates.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                        >
                            <Map.Marker coordinate={coordinates} title="Você está aqui" />
                            <Map.Marker coordinate={{
                                latitude: -23.603452682495117,
                                longitude: -46.43092727661133
                            }} title="IBF EL SHADDAY" description="Rua Mendes Freire, nº 90" />
                            <MapViewDirections origin={{
                                latitude: coordinates.latitude,
                                longitude: coordinates.longitude,
                            }} destination={{
                                latitude: -23.603452682495117,
                                longitude: -46.43092727661133
                            }}
                                apikey="AIzaSyD2a2ng9QWRhJZZeUKyMaRyYCEl7iE4PyE"
                                strokeWidth={3}
                                strokeColor="red"
                            />
                        </Map>
                    )}

            </Container>
        </>
    );
}

Location.navigationOptions = {
    tabBarLabel: 'Localização',
    tabBarIcon: ({ tintColor }) => <Icon name="room" size={20} color={tintColor} />
}
