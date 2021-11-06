import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Host } from 'react-native-portalize';
import { ShowContext } from '../../contexts/ShowContext';

import { SeasonListModal } from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('SeasonListModal component', () => {
  const seasons = [
    {
      id: '1',
      name: 'fake-season-1',
    },
    {
      id: '2',
      name: 'fake-season-2',
    },
  ];

  const fakeFunctionClose = jest.fn();
  const fakeFunctionChangeSeason = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <Host>
        <ShowContext.Provider value={{ seasons } as any}>
          <SeasonListModal
            isVisible
            onClose={fakeFunctionClose}
            changeSeason={fakeFunctionChangeSeason}
            selectedSeasonNumber={1}
          />
        </ShowContext.Provider>
      </Host>,
    );

    expect(getByText('Choose a season')).toBeDefined();
  });

  it('changes season when press button', () => {
    const { getByTestId } = render(
      <Host>
        <ShowContext.Provider value={{ seasons } as any}>
          <SeasonListModal
            isVisible
            onClose={fakeFunctionClose}
            changeSeason={fakeFunctionChangeSeason}
            selectedSeasonNumber={1}
          />
        </ShowContext.Provider>
      </Host>,
    );

    const button = getByTestId('1');

    fireEvent.press(button);

    expect(fakeFunctionChangeSeason).toBeCalled();
  });
});
