import React, { Component } from 'react';
import axios from 'axios';
import Comic from './components/Comic/Comic';
import { View, Text } from 'react-native';

export default class App extends Component {
	state = {
		comics: [],
		previousComic: null,
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
		let content = null;
		if (this.state.loading) {
			content = <Text>Loading...</Text>;
		} else {
			content = <Comic comics={this.state.comics} />;
		}
		return <View>{content}</View>;
	}
}
