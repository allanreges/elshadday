import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from './Main'
import Event from './Event'
import Footer from './Components/Footer'

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        Event
    }, {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#bf2726'
            },
            headerTintColor: '#fff'
        }
    })
)

export default Routes
