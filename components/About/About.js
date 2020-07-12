import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const About = () => {
	return (
		<View style={styles.about__container}>
			<Text style={styles.about__text}>
				<Text style={styles.about__title}>xkcd</Text> is a cool series
				of webcomics of 'romance, sarcasm, math and language'
			</Text>
			<Text>
				As the xkcd.com states, an answer to the 'What does XKCD stand
				for?' question is: It's just a word with no phonetic
				pronunciation -- a treasured and carefully-guarded point in the
				space of four-character strings.
			</Text>
			<Text>I sincerely suggest you check it out!</Text>
		</View>
	);
};

export default About;
