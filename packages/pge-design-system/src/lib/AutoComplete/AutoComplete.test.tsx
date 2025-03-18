import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PGEAutoComplete } from './AutoComplete';
import { CountryService } from '../service/CountryService';
import { ObjectItem } from '../../types/types';
import { userEvent } from '@storybook/test';

test('renders learn react link', async () => {

  const data: ObjectItem[] = CountryService.getCountries().data;
  const groupedData: ObjectItem[] = CountryService.getGrouped().data as unknown as ObjectItem[];

  render(<PGEAutoComplete value={''} items={data} field="name" />);
  const textbox = screen.getByRole(/combobox/i);
  expect(textbox).toBeInTheDocument();
  // await userEvent.type(textbox, 'al');
  // const listbox = screen.getByRole(/listbox/i);
  // expect(listbox).toBeInTheDocument();
});
