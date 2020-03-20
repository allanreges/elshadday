import React from 'react';
import { StatusBar, StyleSheet, Text, View} from 'react-native'
import './config/ReactotronConfig'
import Routes from './routes'

export default function App() {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#CD5C5C" />
        <Routes />
        </>
    )
}
