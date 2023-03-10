import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavigationComponent from './NavigationComponent';

describe('NavigationComponent', () => { 
  test('renders the component', () => { 
    const container = render(<NavigationComponent />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should display Brand', () => { 
    const { getByTestId, getByText } = render(<NavigationComponent/>);
    expect(getByText('Family Tree App')).toBeInTheDocument();
    expect(getByTestId('navbar-brand-image')).toBeInTheDocument();
  });

  test('should display nav items', () => {
    const { getByText } = render(<NavigationComponent/>);
    expect(getByText('Help')).toBeInTheDocument();
    expect(getByText('Zoom')).toBeInTheDocument();
  });

  test('should display sub-nav items when Zoom is clicked', () => {
    const { getByText } = render(<NavigationComponent />);
    fireEvent.click(getByText('Zoom'));
    expect(getByText('25%')).toBeInTheDocument();
    expect(getByText('50%')).toBeInTheDocument();
    expect(getByText('75%')).toBeInTheDocument();
    expect(getByText('100%')).toBeInTheDocument();
    expect(getByText('Fit to Screen')).toBeInTheDocument();
  });
   
});