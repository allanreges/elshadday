import React, { useEffect, useState, useRef, View } from 'react';
import { ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, List, Item, Bg, Text, Description, SubmitButton, ButtonText, DescContainer, ProductModal, BgPicture, DescriptionModal, Title, FormContainer, Feedback, ButtonContainer, Loading, SubTitleModal, TitleV2, Row, BackButton, ButtonReverse, SubmitButtonDefault } from './styles'
import api from '../services/api'
import Input from '../Components/Input';




export default function Mission() {
    const [loading, setLoading] = useState(true)
    const [loadingForm, setLoadingForm] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [activeProduct, setActiveProduct] = useState({})
    const [data, setData] = useState([])

    const formRef = useRef(null);



    const [feedback, setFeedback] = useState(null)

    async function handleSubmit({ amount, name, phone, fyi }) {

        setLoadingForm(true)
        await api.post('/product-reservations', {
            amount,
            name,
            phone,
            product: activeProduct.name,
            description: fyi,
            price: amount * activeProduct.price

        })
        setLoadingForm(false)
        setFeedback(true)
    }

    async function handleData() {
        const response = await api.get('/product')
        setData(response.data.product)
        setLoading(false)
    }

    function handleModal(product) {
        setShowModal(!showModal)
        if (product) setActiveProduct(product)
        if (!product) {
            setActiveProduct({})
            setFeedback(null)
        }
    }

    useEffect(() => {
        handleData()
        setFeedback(null)
    }, [])

    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (<List data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) =>
                <Bg source={{ uri: `${item.images[0].path}` }}>
                    <Item ><Text>{item.name}</Text><DescContainer><Description>{item.description}</Description><SubmitButtonDefault onPress={() => handleModal(item)}><ButtonText>Reservar</ButtonText></SubmitButtonDefault></DescContainer>
                    </Item>
                </Bg>
            } />)}
            <ProductModal visible={showModal} animationType="slide"
            >{activeProduct.images && (
                <>
                    <BgPicture source={{ uri: `${activeProduct.images[0].path}` }} />
                    <Container>
                        <Title>{activeProduct.name}</Title>
                        <DescriptionModal>{activeProduct.description}</DescriptionModal>
                        <SubTitleModal>{`R$${activeProduct.price},00`}</SubTitleModal>
                        <TitleV2>{`Classe: ${activeProduct.classes}`}</TitleV2>
                        <FormContainer ref={formRef} onSubmit={handleSubmit}>
                            <Input name="name" placeholder="Digite o seu nome" type="text" />
                            <Input name="amount" placeholder="Quantidade" type="number" />
                            <Input name="phone" placeholder="Telefone para contato" type="text" />
                            <Input name="fyi" placeholder="Observação" type="text" multiline numberOfLines={4} />
                            <Row>
                                <BackButton onPress={() => handleModal()}>

                                    <ButtonContainer>
                                        <ButtonReverse>
                                            Voltar
                                        </ButtonReverse>
                                    </ButtonContainer>


                                </BackButton>
                                <SubmitButton onPress={() => formRef.current.submitForm()}>
                                    {loadingForm ? <Loading size="small" color="#fff" /> : (
                                        <ButtonContainer>
                                            <ButtonText>
                                                Enviar Pedido
                            </ButtonText>
                                        </ButtonContainer>
                                    )}

                                </SubmitButton>

                            </Row>
                            {feedback && (
                                <Feedback>
                                    Muito obrigado!, pedido reservado com sucesso.
                                </Feedback>
                            )}
                        </FormContainer>
                    </Container>

                </>
            )}</ProductModal>
        </Container >

    );
}
Mission.navigationOptions = {
    tabBarLabel: 'Missões',
    tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={20} color={tintColor} />
}
