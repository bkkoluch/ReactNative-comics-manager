import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/MainScreen/MainScreen';
import DetailedComic from './components/Comic/DetailedComic/DetailedComic';
import About from './components/About/About';
console.disableYellowBox = true;

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={MainScreen}
					options={{
						headerTitleStyle: {
							textAlign: 'center',
						},
					}}
				/>
				<Stack.Screen
					name='Comic'
					component={DetailedComic}
					options={{
						headerTitleStyle: {
							textAlign: 'center',
							marginRight: 50,
						},
					}}
				/>
				<Stack.Screen
					name='About'
					component={About}
					options={{
						headerTitleStyle: {
							textAlign: 'center',
							marginRight: 50,
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
