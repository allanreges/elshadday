import React from 'react';
import { StatusBar, StyleSheet, Text, View} from 'react-native'
import './config/ReactotronConfig'
import Footer from './Components/Footer'
import Routes from './routes'

export default function App() {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#bf2726" />
        <Routes />
        <Footer />
        </>
    )
}
