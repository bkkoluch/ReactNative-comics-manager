import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DetailedComic(props) {
	return (
		<View>
			<Text style={styles.title}>Detailed comic component</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: '#fff',
	},
});
