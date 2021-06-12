import * as React from 'react';
import {useTheme} from 'styled-components';
import {Theme} from '~/style/theme';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Section from '../../components/molecules/Section';
import ss from './index.styles';

export default function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme() as Theme;
  const backgroundStyle = {
    backgroundColor: theme.colors.background,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Section title="Step One">
            Edit <Text style={ss.highlight}>App.js</Text> to change this screen
            and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">See Your Changes</Section>
          <Section title="Debug">Debug Debug Debug</Section>
          <Section title="Learn More">Learn More Learn More Learn More</Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
