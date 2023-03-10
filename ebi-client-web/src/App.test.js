import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppMe from './App';
import BirthDayToasterComponent from './components/BirthDayToasterComponent';
import NavigationComponent from './components/NavigationComponent';

describe('App', () => {
  const { getByTestId } = screen
  test('renders the component', () => { 
    const container = render(<AppMe />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render page title', () => { 
    const { getByTestId } = render(<AppMe/>);
    expect(getByTestId('page-title')).toHaveTextContent('Family Tree');
  });

  test('should display NavigationComponent', () => { 
    const { getByTestId, getByText } = render(<AppMe/>);
    expect(getByText('Family Tree App')).toBeInTheDocument();
    expect(getByTestId('navbar-brand-image')).toBeInTheDocument();
  });

})