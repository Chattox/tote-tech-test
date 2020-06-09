/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import getTechNews from '../src/config/config';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  getTechNews();
});
