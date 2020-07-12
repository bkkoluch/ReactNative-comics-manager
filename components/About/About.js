import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function About() {
	return (
		<View style={styles.about__container}>
			<Text style={styles.about__text}>
				<Text style={styles.about__title}>xkcd</Text> is a cool series
				of webcomics of 'romance, sarcasm, math and language'
			</Text>
			<Text style={styles.about__text}>
				As the xkcd.com states, an answer to the 'What does XKCD stand
				for?' question is: It's just a word with no phonetic
				pronunciation -- a treasured and carefully-guarded point in the
				space of four-character strings.
			</Text>
			<Text style={styles.about__recommendation}>
				I sincerely suggest you check it out!
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	about__container: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
		height: '100%',
	},
	about__text: {
		marginBottom: 20,
		color: '#fff',
	},
	about__title: {
		fontSize: 32,
		textAlign: 'center',
	},
	about__recommendation: {
		color: '#fff',
		marginTop: 50,
		fontSize: 25,
	},
});
