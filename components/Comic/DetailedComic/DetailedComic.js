import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function DetailedComic(props) {
	return (
		<View style={styles.detailed__container}>
			<Text style={styles.detailed__title}>
				{props.route.params.props.title}
			</Text>
			<Image
				style={styles.detailed__image}
				source={{
					uri: props.route.params.props.image,
				}}
				resizeMode='contain'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	detailed__container: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	detailed__title: {
		color: '#fff',
		fontSize: 32,
		textAlign: 'center',
	},
	detailed__image: {
		height: '80%',
		width: '100%',
	},
});
