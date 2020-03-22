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
        setData(response.data)
        console.tron.log(response)
    }

    async function handleNavigate(event) {

        props.navigation.navigate('Event', { event })

    }



  return (
    <Container>

        <List elevation={5} data={data.events} keyExtractor={event => event.id} renderItem={({ item }) => (
            <User elevation={5} >
                <Avatar source={{ uri: item.icon }} />
                <Name>{item.title}</Name>
                <Bio>{item.description}</Bio>
                <ProfileButton onPress={()=> handleNavigate(item)}>
                    <ProfileButtonText>Programação Detalhada</ProfileButtonText>
                </ProfileButton>

            </User>
            )} />

    </Container>
  );
}

Main.navigationOptions = {
    title: 'IBF EL SHADDAY'
}
