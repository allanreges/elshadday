import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from './Main'
import User from './User'

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        User
    }, {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5633a1'
            },
            headerTintColor: '#fff'
        }
    })
)

export default Routes
