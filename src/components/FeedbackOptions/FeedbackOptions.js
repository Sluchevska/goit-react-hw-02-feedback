import PropTypes from 'prop-types';
import React from 'react';
import { Buttons } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Buttons type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {' '}
      {option.toUpperCase()}{' '}
    </Buttons>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  handleIncrement: PropTypes.func,
};
