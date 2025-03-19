import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RightPanel } from './RightPanel';

describe('RightPanel', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((message) => {
      if (!message.includes('Could not parse CSS stylesheet')) {
        console.error(message);
      }
    });
  });
  const mockDispatchFn = jest.fn();
  const MockContext = React.createContext({
    state: { rightVisible: true },
    dispatch: mockDispatchFn
  });


  test('renders the title', () => {
    render(<RightPanel />);
    const title = screen.getByText('SUPPLEMENT DATA');
    expect(title).toBeInTheDocument();

  });

  test('renders the Historical numbers', () => {
    render(<RightPanel />);
    const subtitle = screen.getByText('Historical Numbers');
    expect(subtitle).toBeInTheDocument();

  });

  test('renders the Mileage and Span Information', () => {
    render(<RightPanel />);
    const subtitle = screen.getByText('Mileage and Span Information');
    expect(subtitle).toBeInTheDocument();

  });
  test('renders the Outages and Ignitions', () => {
    render(<RightPanel />);
    const subtitle = screen.getByText('Outages and Ignitions');
    expect(subtitle).toBeInTheDocument();

  });
  test('renders the Overlapping Programs', () => {
    render(<RightPanel />);
    const subtitle = screen.getByText('Overlapping Programs');
    expect(subtitle).toBeInTheDocument();

  });
  test('renders the collapse icon', () => {
    render(<RightPanel />);
    const expandIcon = screen.getByAltText('Expand/collapse Icon');
    expect(expandIcon).toBeInTheDocument();
  });
  // test('collapses when the collapses icon is clicked', () => {
  //   render(<MockContext.Provider value={{ state: { rightVisible: true }, dispatch: mockDispatchFn }}>
  //     <RightPanel /></MockContext.Provider>);
  //   const expandIcon = screen.getByRole('button', { name: 'Expand/collapse Icon' });
  //   expect(expandIcon).toBeInTheDocument();
  //   expandIcon.click();
  //   const title = screen.queryByText('Historical Numbers');
  //   expect(title).not.toBeVisible();

  // });
  test('expands when the collapses icon is clicked', () => {
    render(<RightPanel />);
    const expandIcon = screen.getByAltText('Expand/collapse Icon');
    expect(expandIcon).toBeInTheDocument();
    expandIcon.click();
    const title = screen.queryByText('Historical Numbers');
    expect(title).toBeVisible();
  });
});