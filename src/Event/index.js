import React, {useEffect, useState} from 'react';
import api from '../services/api'
import { Container, Avatar, Name, Bio, Header, Stars, Starred, OwnerAvatar, Info, Title, Author   } from './styles';


export default function Event({navigation}) {
    const [event, setEvent] = useState('')

    useEffect(() => {
        handleData()
    }, [event])

    function handleData() {
       setEvent(navigation.getParam('event'))
    }




  return (
    <Container>
        <Header>
        <Avatar source={{ uri: event.icon}} />
                <Name>{event.title}</Name>
                <Bio>{event.description}</Bio>
        </Header>

    </Container>
  );
}

Event.navigationOptions = {
    title: ''
}

