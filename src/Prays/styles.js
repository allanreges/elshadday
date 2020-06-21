import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { Form } from '@unform/mobile';
import { ActivityIndicator } from 'react-native';

export const Loading = styled(ActivityIndicator)`
    padding: 14px 0;
`

export const FormContainer = styled(Form)`
    margin: 20px 0;
`

export const BgPicture = styled.Image`
    width: 100%;
    height: 250px;
    opacity: 1;
    background: black;
`;


export const SubmitButton = styled(RectButton)`
    background: #e66d05;
    margin: 30px auto 0 auto;
    border-radius: 5px;
    width: 200px;
`

export const ButtonText = styled.Text`
    color: white;
    text-align: center;
    padding: 12px 0;
    font-size: 18px;
    font-weight: bold;
`

export const ButtonContainer = styled.View``

export const Container = styled.ScrollView`
    flex: 1;
    background: #eaeaea;
    padding: 0 25px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: #e66d05;
    text-align: center;
    font-weight: bold;
    margin: 40px auto 20px auto;
    max-width: 300px;

`;
export const SubTitle = styled.Text`
    font-size: 16px;
    color: #9e000b;
    text-align: center;
    font-style: italic;
    margin: 0 auto 20px auto;
    font-weight: bold;
    max-width: 290px;
`

export const Feedback = styled.Text`
    font-size: 14px;
    color: #9e000b;
    text-align: center;
    font-style: italic;
    margin: 20px auto 20px auto;
    font-weight: bold;
    max-width: 250px;
`

export const Text = styled.Text`
    font-size: 18px;
    color: #363636;
    text-align: center;
    font-weight: bold;
    margin: 20px 0;
`

