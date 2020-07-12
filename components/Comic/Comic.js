import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function (props) {
	return (
		<TouchableOpacity>
			<View
				style={styles.comic__container}
				onTouchEnd={() => props.navigation.navigate('Comic', { props })}
			>
				<Text style={styles.comic__title}>{props.title}</Text>
				<Image
					style={styles.comic__image}
					source={{ uri: props.image }}
					resizeMode='contain'
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	comic__container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 60,
		padding: 40,
	},
	comic__title: {
		color: '#fff',
		fontSize: 20,
		letterSpacing: -2,
		textTransform: 'uppercase',
		marginLeft: 5,
	},
	comic__image: {
		height: 60,
		width: 200,
	},
});
