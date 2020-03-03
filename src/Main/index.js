import React, {useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container, Form, Input, SubmitButton, List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText  } from './styles';
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'
import { Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main(props) {

    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(users){
            AsyncStorage.setItem("users", JSON.stringify(users))
        }else {
            handleStorage()
        }
      }, [users]);

   async function handleStorage() {
        const usersStorage = await AsyncStorage.getItem('users')
        if(usersStorage !== null) {
            setUsers(JSON.parse(usersStorage))
        }
    }

    async function handleNavigate(user) {
        console.tron.log('esse é o ', user)

        props.navigation.navigate('User', { user })

    }


    async function handleSubmit() {
        setLoading(true)
        const response = await api.get(`/users/${newUser}`)
        if(response.status === 200) {
            const data = {
                name: response.data.name,
                login: response.data.login,
                bio: response.data.bio,
                avatar: response.data.avatar_url
            }
            setUsers([...users, data])
            setNewUser('')
            setLoading(false)
            Keyboard.dismiss()
        }
        setLoading(false)
    }


  return (
    <Container>
        <Form>
            <Input value={newUser} onChangeText={ text => setNewUser(text)} autoCorrect={false} autoCapitalize="none" returnKeyType="send" onSubmitEditing={handleSubmit} placeholder="Adicionar usuário">
            </Input>
            <SubmitButton loading={loading} onPress={handleSubmit}>
               { loading ? <ActivityIndicator color="#fff" /> :  <Icon name="add" size={20} color="#fff" />}
            </SubmitButton>
        </Form>
        <List data={users} keyExtractor={user => user.login} renderItem={({ item }) => (
            <User>
                <Avatar source={{ uri: item.avatar}} />
                <Name>{item.name}</Name>
                <Bio>{item.bio}</Bio>
                <ProfileButton onPress={()=> handleNavigate(item)}>
                    <ProfileButtonText>Ver perfil</ProfileButtonText>
                </ProfileButton>
            </User>
            )}>
        </List>
    </Container>
  );
}

Main.navigationOptions = {
    title: 'Usuários'
}
