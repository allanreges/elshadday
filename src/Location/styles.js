import styled from 'styled-components/native'
import { WebView } from 'react-native-webview';
import MapView from 'react-native-maps'

export const MainContainer = styled.View`
    flex: 1;
    padding: 10px 20px;
    background: #eaeaea;
`;

export const Container = styled.ScrollView`
    flex: 1;
    background: #eaeaea;
`;

export const BgPicture = styled.Image`
    width: 100%;
    height: 250px;
    opacity: 1;
    background: black;
`;

export const Title = styled.Text`
    font-size: 26px;
    color: #e66d05;
    text-align: center;
    font-weight: bold
`
export const SubTitle = styled.Text`
    font-size: 18px;
    color: #9e000b;
    text-align: center;
    font-style: italic;
    font-weight: bold
`

export const TextTitle = styled.Text`
    font-size: 18px;
    color: #363636;
    text-align: center;
    font-weight: bold;
    margin: 20px 0;
`
export const Video = styled(WebView)`
    width: 100%;
    height: 200px;
    display: flex
    margin: 0 auto;
`
export const Map = styled(MapView)`
    width: 100%;
    height: 1000px;
    flex: 1;
    margin: 0 auto;

`
