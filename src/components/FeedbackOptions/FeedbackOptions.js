import PropTypes from 'prop-types';
import React from 'react';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {

  return options.map(option => (
      <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {' '}
      {option}{' '}
    </Button>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  handleIncrement: PropTypes.func,
};
