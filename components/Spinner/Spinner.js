import React from 'react';
import { ActivityIndicator, StyleSheet, View, Dimensions } from 'react-native';

const App = () => (
	<View style={styles.spinner}>
		<ActivityIndicator size='large' color='#fff' />
	</View>
);

const styles = StyleSheet.create({
	spinner: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height - 64,
		justifyContent: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
});

export default App;
