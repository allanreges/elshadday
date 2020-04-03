import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import './config/ReactotronConfig'
import CodePush from 'react-native-code-push'
import Footer from './Components/Footer'
import Routes from './routes'

function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#bf2726" />
            <Routes />
            <Footer />
        </>
    )
}
export default CodePush({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App)
