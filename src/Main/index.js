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



export default function Main(props) {

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
        <>
            <Container>
                <BgPicture source={Bg} />
                <MainContainer>

                    <Title>
                        IBF EL SHADDAY
                </Title>
                    <SubTitle>
                        2020 ANO DA MULTIPLICAÇÃO
                </SubTitle>
                    <TextTitle>
                        Próxima Live:
                </TextTitle>
                    {loading ? <ActivityIndicator /> : <Video
                        javaScriptEnabled
                        domStorageEnabled
                        origin="http://www.youtube.com"
                        source={{ uri: `https://www.youtube.com/embed/${data && data[data.length - 1].url}` }}
                    />}
                </MainContainer>
            </Container>
        </>
    );
}

Main.navigationOptions = {
    tabBarLabel: 'Início',
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />
}
