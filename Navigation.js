import React from 'react'
import { View, Text } from 'react-native'
import Home from './screens/Home'
import MeetingRoom from './screens/MeetingRoom'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Room'
          component={MeetingRoom}
          options={{
            title: 'Start a Meeting',
            headerStyle: {
              backgroundColor: '#1c1c1c',
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
//
//
// <NavigationContainer>
//   <Stack.Navigator initialRouteName={Home}>
//     <Stack.Screen name='Home' component={Home} />
//     <Stack.Screen name='Room' component={MeetingRoom} />
//   </Stack.Navigator>
// </NavigationContainer>
