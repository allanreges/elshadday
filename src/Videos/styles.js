import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';

export const Container = styled.View`
flex: 1;
padding: 30px;
background: #eaeaea;
`;

export const Form = styled.View`
flex-direction: row;
padding-bottom: 20px;
border-bottom-width: 1px;
border-color: #eee;
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

export const List = styled.FlatList`
margin-top: 20px;

`;

export const User = styled.View`
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

export const VideosList = styled.FlatList`


`
export const Video = styled(WebView)`
    width: 100%;
    height: 200px;
    display: flex
    margin: 20px auto;
    border-radius: 15px;

    iframe {
        border-radius: 15px;
    }
`
