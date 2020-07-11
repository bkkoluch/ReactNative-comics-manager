import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function (props) {
	return (
		<TouchableOpacity>
			<View
				style={styles.container}
				onTouchStart={() => props.navigation.navigate('Comic')}
			>
				<Text style={styles.title}>{props.title}</Text>
				<Image
					style={styles.image}
					source={{ uri: props.image }}
					resizeMode='contain'
				/>
			</View>
		</TouchableOpacity>
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
		padding: 40,
	},
	image: {
		height: 60,
		width: 200,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		letterSpacing: -2,
		textTransform: 'uppercase',
		marginLeft: 5,
	},
});
