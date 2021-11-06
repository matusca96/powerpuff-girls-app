import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from 'react-native';
import useShow from '../../hooks/useShow';

describe('useShow hook', () => {
  const TestComponent = (): JSX.Element => {
    const { generalInfo } = useShow();

    return <Text>{generalInfo.name}</Text>;
  };

  it('throws an error if context is undefined', () => {
    expect(() => render(<TestComponent />)).toThrow(
      'useShow must be used within a ShowProvider',
    );
  });
});
