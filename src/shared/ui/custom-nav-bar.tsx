import {getHeaderTitle} from '@react-navigation/elements';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {CombinedDarkTheme} from 'shared/themes';

type CustomNavigationBarProps = {} & NativeStackHeaderProps;

export const CustomNavigationBar = ({
  navigation,
  route,
  options,
  back,
}: CustomNavigationBarProps) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header theme={CombinedDarkTheme}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
