import React from 'react';
import { render, screen } from '@testing-library/react';
import Hobby from './components/Hobby';
import { IHobby } from './types/interfaces';

describe('Sample test with React Testing Library', () => {
  it('shows "Passion: Low"', () => {
    const hobbyExample: IHobby = {
      _id: '1',
      passionLevel: 'low',
      name: 'Playing football',
      year: 2014,
    }
    const { queryAllByText, getByTestId } = render(
      <Hobby hobby={hobbyExample} onDelete={() => {}} />
    );
    expect(screen.queryAllByText('Passion: Low').length).toBe(1);
  });
});
