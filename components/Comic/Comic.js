import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function (props) {
	return (
		<View
			style={styles.container}
			onPress={() => props.navigation.navigate('Comic')}
		>
			<Text style={styles.title}>{props.title}</Text>
			<Image
				style={styles.image}
				source={{ uri: props.image }}
				resizeMode='contain'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 50,
	},
	image: {
		height: '100%',
		width: 200,
	},
	title: {
		color: '#fff',
		fontSize: 30,
		letterSpacing: -2,
		textTransform: 'uppercase',
		marginLeft: 5,
	},
});
