import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native';
import { Form } from '@unform/mobile';

export const Loading = styled(ActivityIndicator)`
    padding: 14px 0;
`

export const Container = styled.ScrollView`
flex: 1;
padding: 30px 15px;
background: #eaeaea;
`;

export const SubmitButton = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    background: #db190b;
    border-radius: 4px;
    max-width: 80%;
    width: 160px;
    padding: 0 12px;
    margin: 15px 0 0 0;
    opacity: ${props => props.loading ? 0.7 : 1}

`;

export const SubmitButtonDefault = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #db190b;
    border-radius: 4px;
    max-width: 80%;
    width: 160px;
    padding: 0 12px;
    margin: 15px 0 0 0;
    opacity: ${props => props.loading ? 0.7 : 1}

`;

export const BackButton = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    max-width: 80%;
    width: 160px;
    padding: 0 12px;
    margin: 15px 0 0 0;
    opacity: ${props => props.loading ? 0.7 : 1}
`;

export const ButtonText = styled.Text`
    color: white;
    text-align: center;
    padding: 12px 0;
    font-size: 14px;
    font-weight: bold;
`

export const ButtonReverse = styled.Text`
    color: #000;
    text-align: center;
    padding: 12px 0;
    font-size: 14px;
    font-weight: bold;
`










export const List = styled.FlatList.attrs({
    showVerticalScrollIndicator: false,
})`
    margin-top: 20px;
    width: 100%;

`;

export const Text = styled.Text`
    font-size: 19px;
    color: white;
    text-transform: uppercase;
    padding: 50px 20px 0 20px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
`

export const Item = styled.View`
    flex: 1;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;


`

export const DescContainer = styled.View`
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    justify-content: space-evenly;
    background: #fff;
    align-items: center;
    height: 150px;
`
export const ProductModal = styled.Modal`

    background: #000;

`
export const BgPicture = styled.Image`
    width: 100%;
    height: 250px;
    opacity: 1;
    background: black;
`;
export const Bg = styled.ImageBackground`
    height: 150px;
    width: 50%;
    margin: 7px 0 ;
    position: relative;
    z-index: 1;
    display: flex;
    background: rgba(0, 0, 0, 0.3);
`
export const Description = styled.Text`
    font-size: 16px;
    color: #db190b;
    padding: 20px 10px 10px 10px;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
`

export const DescriptionModal = styled.Text`
    font-size: 16px;
    color: #999;
    padding: 0;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
`

export const SubTitleModal = styled.Text`
    font-size: 21px;
    color: #000;
    padding: 0;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
    margin: 10px 0 0 0;
`

export const Title = styled.Text`
    font-size: 32px;
    color: #db190b;
    padding: 20px 10px 10px 10px;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
`

export const TitleV2 = styled.Text`
    font-size: 24px;
    color: #9e000b;
    padding: 20px 10px 10px 10px;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
`

export const FormContainer = styled(Form)`
    margin: 20px 0;
    align-items: center;
`

export const Feedback = styled.Text`
    font-size: 14px;
    color: #9e000b;
    text-align: center;
    font-style: italic;
    margin: 20px auto 20px auto;
    font-weight: bold;
    max-width: 250px;
`;

export const ButtonContainer = styled.View`
    margin: 0;
`

export const Row = styled.View`
    flex-direction: row;
    width: 90%;
    justify-content: space-between
`


