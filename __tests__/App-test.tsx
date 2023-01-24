/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Money from '../src/play/Money';

it('renders correctly', () => {
  renderer.create(<Money />);
});
