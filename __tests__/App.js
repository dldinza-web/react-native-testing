/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {mount} from 'enzyme';
import React from 'react';
import App from '../App';

describe('App', () => {
  describe('Form', () => {
    let app = null
    beforeEach(() => {
      app = mount(<App/>)
    })

    it('should render the world "Length" in testId rectangleLengthText text', () => {
      const text = app.find('Text').at(0).text()

      expect(text).toEqual('Length')
    })

    test.skip('should render the input in testId "rectangleLengthInput"', () => {
      const input = app.find('TextInput').at(0)

      expect(input).toHaveProperty('placeholder', 'Insert length')
    })

    it('should render the word "Width" in testID rectangleWitdhText text', () => {
      const text = app.find("[testID='rectangleWidthText']").at(0).text()

      expect(text).toEqual('Width')
    })
  });
});
