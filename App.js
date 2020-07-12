import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/MainScreen/MainScreen';
import DetailedComic from './components/Comic/DetailedComic/DetailedComic';
import About from './components/About/About';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={MainScreen} />
				<Stack.Screen name='Comic' component={DetailedComic} />
				<Stack.Screen name='About' component={About} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
