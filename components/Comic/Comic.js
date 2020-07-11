import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function (props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.title}</Text>
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
		flexDirection: 'row',
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '50px',
		borderColor: '#ccc',
		borderWidth: 5,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	image: {
		height: '100%',
		width: '200px',
	},
	title: {
		color: '#fff',
		fontFamily: 'Trebuchet MS, sans-serif',
		fontSize: '30px',
		letterSpacing: '-2px',
		textTransform: 'uppercase',
		marginLeft: '5px',
	},
});
