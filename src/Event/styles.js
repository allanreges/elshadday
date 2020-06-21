import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';

export const Container = styled.View`
flex: 1;
padding: 30px 15px;
background: #eaeaea;
`;

export const Form = styled.View`
flex-direction: row;
padding-bottom: 20px;
border-bottom-width: 1px;
border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
flex: 1;
height: 40px;
background: #eee;
border-radius: 4px;
padding: 0 15px;
border: 1px solid #eee;

`;

export const SubmitButton = styled(RectButton)`
justify-content: center;
align-items: center;
background: #db190b;
border-radius: 4px;
margin-left: 10px;
padding: 0 12px;
opacity: ${props => props.loading ? 0.7 : 1}

`;

export const User = styled.View.attrs({
    elevation: 123
})`
align-items: center;
margin: 0 20px 30px;
padding: 10px;
box-shadow: 10px 5px 5px black;

`;
export const Avatar = styled.Image`
width: 64px;
height: 64px;
border-radius: 32px;
background: #eee;
`;
export const Name = styled.Text`
font-size: 14px;
color: #333;
font-weight: bold;
margin-top: 4px;
text-align: center;
`;
export const Bio = styled.Text.attrs({
    numberOfLines: 2
})`
font-size: 13px;
line-height: 18px;
color: #999;
margin-top: 5px;
text-align: center

`;
export const ProfileButton = styled(RectButton)`
margin-top: 10px;
align-self: stretch;
border-radius: 4px;
background: #db190b;
justify-content: center;
align-items: center;
height: 36px;
`;
export const ProfileButtonText = styled.Text`
font-size: 14px;
font-weight: bold;
color: #fff;
text-transform: uppercase;
`;

export const Logo = styled.Image`
    width: 230px;
    height: 150px;
    margin: 30px auto;
`;

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
    width: 100%;
    height: 100%;
    background: #fff;
    color: #db190b;
    padding: 20px 10px 10px 10px;
    font-weight: bold;
    text-align: center;
    line-height: 22px;
`


