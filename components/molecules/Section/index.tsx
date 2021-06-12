import * as React from 'react';
import {useTheme} from 'styled-components';
import {Theme} from '~/style/theme';
import {Text, View} from 'react-native';
import ss from './index.styles';

type Props = {
  children?: React.ReactNode;
  title: string;
};

const Section = ({children, title}: Props): JSX.Element => {
  const theme = useTheme() as Theme;

  return (
    <View style={ss.sectionContainer}>
      <Text
        style={[
          ss.sectionTitle,
          {
            color: theme.colors.strongText,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          ss.sectionDescription,
          {
            color: theme.colors.weakText,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;
