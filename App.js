import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default class App extends Component {
	state = {
		comics: [],
	};

	componentDidMount() {
		axios
			.get('https://xkcd.com/info.0.json')
			.then((res) => {
				console.log(res.data);
				const data = res.data;
				this.setState({
					comics: data,
				});
			})
			.catch(() => {
				console.log('There was some error fetching the data');
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.paragraph}>{this.state.comics.title}</Text>
				<StatusBar style='auto' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c275f',
		alignItems: 'center',
		justifyContent: 'center',
		width: '500px',
	},
	paragraph: {
		color: '#fff',
	},
});
