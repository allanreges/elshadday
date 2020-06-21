import React, { useEffect, useState, useRef, View } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-get-random-values';
import { Container, Title, SubTitle, Text, SubmitButton, FormContainer, ButtonContainer, ButtonText, Loading, Feedback, BgPicture } from './styles';
import api from '../services/api'
import Input from '../Components/Input';
import Bg from '../files/img/bgpray.jpg'



export default function Prays() {
    useEffect(() => {
        setFeedback(null)
    }, [])

    const formRef = useRef(null);

    const [loading, setLoading] = useState(false)
    const [feedback, setFeedback] = useState(null)

    async function handleSubmit(data) {
        setLoading(true)
        await api.post('/prays', data)
        setLoading(false)
        setFeedback(true)
    }

    return (
        <>
            <BgPicture source={Bg} />
            <Container>
                <Title>
                    Faça seu pedido de oração e estaremos orando por você!
                </Title>
                <SubTitle>
                    Você pode colocar o seu nome ou apenas o seu pedido, faça da maneira que for melhor para você.
                </SubTitle>
                <FormContainer ref={formRef} onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Digite o seu nome, apenas se quiser" type="text" />
                    <Input name="description" placeholder="Digite o seu Pedido de oração" type="text" multiline numberOfLines={4} />
                    <SubmitButton onPress={() => formRef.current.submitForm()}>
                        {loading ? <Loading size="small" color="#fff" /> : (
                            <ButtonContainer>
                                <ButtonText>
                                    Enviar Pedido
                            </ButtonText>
                            </ButtonContainer>
                        )}

                    </SubmitButton>
                    {feedback && (
                        <Feedback>
                            Seu pedido foi enviado com sucesso, nosso pastor estará orando por você!
                        </Feedback>
                    )}
                </FormContainer>
            </Container>
        </>
    );
}

Prays.navigationOptions = {
    tabBarLabel: 'Oração',
    tabBarIcon: ({ tintColor }) => <Icon name="people" size={20} color={tintColor} />
}
