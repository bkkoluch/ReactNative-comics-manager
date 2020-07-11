import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Comic = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Comic component</Text>
			<Text>{console.log(props.comics[0].title)}</Text>
			<Image
				style={styles.image}
				source={props.comics[0].img}
				resizeMode='contain'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: '300px',
		width: '100%',
	},
	text: {
		color: '#fff',
	},
});

export default Comic;
