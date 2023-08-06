import {fireEvent, render} from '@testing-library/react-native';
import {ContactCard} from 'entities/contact';
import React from 'react';
import {DataContact} from 'shared';

describe('Contact Card', () => {
  const navigation = {navigate: () => {}};
  spyOn(navigation, 'navigate');

  const component = render(
    <ContactCard data={DataContact[0]} onPress={navigation.navigate} />,
  );

  const contactCard = component.getByTestId('contactCard');

  fireEvent.press(contactCard);

  expect(navigation.navigate).toHaveBeenCalledWith('ContactDetails');
});
