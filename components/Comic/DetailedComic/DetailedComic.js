import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default function DetailedComic({ navigation }) {
	return (
		<TouchableOpacity>
			<View>
				<Text style={styles.title}>Detailed comic component</Text>
				<Button
					title='comic'
					onPress={() => navigation.navigate('Home')}
				></Button>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	title: {
		color: '#000',
	},
});
