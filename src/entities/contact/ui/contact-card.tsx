import React from 'react';
import {Avatar, List} from 'react-native-paper';
import {Style} from 'react-native-paper/lib/typescript/components/List/utils';
import type {Contact} from 'shared';

type ContactCardProps = {
  data: Contact;
  onPress: (data: Contact) => void;
};

export const ContactCard = ({data, onPress}: ContactCardProps) => {
  const AvatarImage = React.useCallback(
    (props: {color: string; style: Style}) => (
      <Avatar.Image {...props} size={36} source={{uri: data.photo}} />
    ),
    [data.photo],
  );

  return (
    <List.Item
      testID="contactCard"
      onPress={() => onPress(data)}
      title={`${data.firstName} ${data.lastName}`}
      description={`${data.age} years`}
      left={AvatarImage}
    />
  );
};
