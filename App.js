import React, { Component } from 'react';
import axios from 'axios';
import Comic from './components/Comic/Comic';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
	state = {
		comics: [],
		recentComicNum: 0,
		loading: true,
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
							if (counter == 6) {
								this.setState({
									loading: false,
								});
							}
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
		let content = [];
		if (this.state.loading) {
			content = <Text style={{ color: '#fff' }}>Loading...</Text>;
		} else {
			content = this.state.comics.map((comic) => {
				return (
					<Comic
						key={comic.num}
						title={comic.title}
						image={comic.img}
					/>
				);
			});
		}

		return (
			<View style={{ backgroundColor: '#000', height: '100%' }}>
				<Text style={styles.header}>
					Click on the comic if you want to view it in detail!
				</Text>
				{content}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		marginTop: 0,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: '#20232a',
		borderRadius: 6,
		backgroundColor: '#61dafb',
		color: '#20232a',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 50,
	},
});
