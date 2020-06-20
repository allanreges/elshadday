import styled from 'styled-components/native'
import { WebView } from 'react-native-webview';

export const Container = styled.View`
flex: 1;
padding: 30px;
background: #eaeaea;
`;

export const VideosList = styled.FlatList`


`
export const Video = styled(WebView)`
    width: 100%;
    height: 200px;
    display: flex
    margin: 20px auto;
    border-radius: 15px;
`

