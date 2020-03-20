import React, {useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator , Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo , List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText  } from './styles';
import api from '../services/api'


export default function Main(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        handleData()
    }, [])

   async function handleData() {
        const response = await api.get()
        setData(response)
        console.tron.log('teste')
    }




  return (
    <Container>
        <Logo style={{width: 50, height: 50}} source={{ uri: ''}}  />

    </Container>
  );
}

Main.navigationOptions = {
    title: 'IBF EL SHADDAY'
}
