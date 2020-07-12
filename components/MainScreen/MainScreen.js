import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Comic from '../Comic/Comic';

export default class MainScreen extends Component {
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
		const { navigation } = this.props;

		let content = [];
		let header = null;
		let footer = null;

		if (this.state.loading) {
			content = <Text style={styles.loading}>Loading...</Text>;
		} else {
			content = this.state.comics.map((comic) => {
				return (
					<Comic
						key={comic.num}
						title={comic.title}
						image={comic.img}
						navigation={navigation}
					/>
				);
			});

			header = (
				<Text style={styles.main__header}>
					Click on the comic if you want to view it in detail!
				</Text>
			);

			footer = (
				<Text
					style={[styles.main__header, styles.main_footer]}
					onPress={() => navigation.navigate('About')}
				>
					Click on the footer to read about xkcd!
				</Text>
			);
		}

		return (
			<ScrollView>
				<View style={{ backgroundColor: '#000', height: '100%' }}>
					{header}
					{content}
					{footer}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	main__container: {
		backgroundColor: '#000',
		height: '100%',
	},
	main__header: {
		marginTop: 0,
		paddingVertical: 8,
		borderWidth: 4,
		borderColor: '#20232a',
		borderRadius: 6,
		backgroundColor: '#fff',
		color: '#20232a',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	main__footer: {
		position: 'absolute',
		bottom: 0,
		margin: 0,
	},
	loading: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 32,
	},
});
