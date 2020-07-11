import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function DetailedComic({ navigation }) {
	return (
		<View>
			<Text style={styles.title}>Detailed comic component</Text>
			<Button
				title='comic'
				onPress={() => navigation.navigate('Home')}
			></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: '#000',
	},
});
