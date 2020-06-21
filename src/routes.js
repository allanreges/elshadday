import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Main from './Main'
import Event from './Event'
import Videos from './Videos'
import Location from './Location'
import Prays from './Prays'


const Routes = createAppContainer(
    createSwitchNavigator({
        App: createBottomTabNavigator({
            Main,
            Event,
            Videos,
            Location,
            Prays
        }, {
            tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: '#d4d4d4',
                style: {
                    backgroundColor: '#e66d05',
                    paddingTop: 10,
                    paddingBottom: 5,
                    height: 60,
                    border: '0',
                    boxShadow: 'none'
                }
            }
        })
    }, {
        initialRouteName: 'App'
    }

    ),
)

export default Routes
