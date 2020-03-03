import React, {useEffect, useState} from 'react';
import api from '../services/api'
import { Container, Avatar, Name, Bio, Header, Stars, Starred, OwnerAvatar, Info, Title, Author   } from './styles';


export default function User({navigation}) {
    const [user, setUser] = useState('')
    const [ stars, setStars] = useState([])

    useEffect(() => {
        setUser(navigation.getParam('user'))
        handleData()
    }, [user])

    async function handleData(){
        if (user) {
            const response = await api.get(`/users/${user.login}/starred`)
            setStars(response.data)
        }
    }

    User.navigationOptions = {
        title: user.name
    }


  return (
    <Container>
        <Header>
        <Avatar source={{ uri: user.avatar}} />
                <Name>{user.name}</Name>
                <Bio>{user.bio}</Bio>
        </Header>
        <Stars data={stars} keyExtractor={star => String(star.id)} renderItem={({ item }) => (
            <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url}}></OwnerAvatar>
                <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                </Info>
            </Starred>
        )}></Stars>
    </Container>
  );
}


