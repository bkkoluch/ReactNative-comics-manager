import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import DetailedComic from './DetailedComic/DetailedComic';

export default function (props) {
	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<Text style={styles.title}>{props.title}</Text>
				<Image
					style={styles.image}
					source={{ uri: props.image }}
					resizeMode='contain'
					onTouchStart={() =>
						props.navigation.navigate('Comic', { props })
					}
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
		marginBottom: 60,
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
