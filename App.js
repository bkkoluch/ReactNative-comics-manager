import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios';

export default class App extends Component {
	state = {
		comics: [],
		previousComic: null,
		recentComicNum: 0,
	};

	componentDidMount() {
		let comicNumber = 1;
		axios
			.get('https://xkcd.com/info.0.json')
			.then((response) => {
				this.setState((prevState) => ({
					comics: [...prevState.comics, response.data],
					recentComicNum: response.data.num,
				}));

				for (let counter = 0; counter < 7; counter++) {
					axios
						.get(
							'https://xkcd.com/' +
								(this.state.recentComicNum - comicNumber) +
								'/info.0.json'
						)
						.then((secondResponse) => {
							this.setState((prevState) => ({
								comics: [
									...prevState.comics,
									secondResponse.data,
								],
							}));
						})
						.catch((error) => {
							console.log(error);
						});
					comicNumber++;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Here's some comic</Text>
				<Text style={styles.text}>{this.state.comics.title}</Text>
				<Image
					source={this.state.comics.img}
					style={styles.image}
					resizeMode='contain'
				/>
				<StatusBar style='auto' />
			</View>
		);
	}
}

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
