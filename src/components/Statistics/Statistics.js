import PropTypes from 'prop-types';
import { StatSection } from './Statistics.styled';
import { Container } from './Statistics.styled';
import { Span } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Container>
      {
        <StatSection>
          <Span>Good: {good} </Span>
          <Span>Neutral: {neutral} </Span>
          <Span>Bad: {bad} </Span>
          <Span>Total: {total} </Span>
          <Span>Positive Feedback: {positivePercentage}% </Span>
        </StatSection>
      }
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
