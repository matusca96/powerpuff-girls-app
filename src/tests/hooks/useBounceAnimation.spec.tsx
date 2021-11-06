import React, { useState } from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';

import { Animated, Text, TouchableWithoutFeedback } from 'react-native';
import { useBounceAnimation } from '../../hooks/useBounceAnimation';

describe('useBounceAnimation hook', () => {
  const TestComponent = (): JSX.Element => {
    const [state, setState] = useState(false);
    const translateY = useBounceAnimation(state, 500);

    return (
      <>
        <Animated.Text
          style={{
            transform: [{ translateY }],
          }}
        >
          AnimationTest
        </Animated.Text>
        <TouchableWithoutFeedback onPress={() => setState(true)}>
          <Text>Button</Text>
        </TouchableWithoutFeedback>
      </>
    );
  };

  it('renders correctly', async () => {
    const { getByText } = render(<TestComponent />);

    expect(await waitFor(() => getByText('AnimationTest'))).toBeDefined();
  });

  it('starts animation when state changes', async () => {
    const { getByText } = render(<TestComponent />);

    const button = await waitFor(() => getByText('Button'));

    fireEvent.press(button);

    expect(await waitFor(() => getByText('AnimationTest'))).toBeDefined();
  });
});
