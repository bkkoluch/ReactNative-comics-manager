import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function DetailedComic(props, { navigation }) {
	return (
		<View style={styles.comic__container}>
			<Text style={styles.comic__title}>
				{props.route.params.props.title}
			</Text>
			<Image
				style={styles.comic__image}
				source={{
					uri: props.route.params.props.image,
				}}
				resizeMode='contain'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	comic__container: {
		marginTop: 50,
		height: 400,
		justifyContent: 'center',
		alignItems: 'center',
	},
	comic__title: {
		color: '#000',
		fontSize: 32,
		textAlign: 'center',
	},
	comic__image: {
		height: '100%',
		width: '100%',
	},
});
