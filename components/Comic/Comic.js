import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function (props) {
	return (
		<View style={styles.container}>
			<Text>{console.log(props.title)}</Text>
			<Image
				style={styles.image}
				source={props.image}
				resizeMode='contain'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		height: '50vh',
		marginBottom: '50px',
	},
	image: {
		height: '100%',
		width: '100%',
	},
	title: {
		color: '#fff',
		fontFamily: 'Trebuchet MS, sans-serif',
		fontSize: '2rem',
		letterSpacing: '-2px',
		textTransform: 'uppercase',
	},
});
