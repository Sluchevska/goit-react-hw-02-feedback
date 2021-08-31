import PropTypes from 'prop-types';
import { StatSection } from './Statistics.styled';
import { Container } from './Statistics.styled';
export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    
    return (
       <Container>
         
            {
              
                total > 0 && (
                  
                <StatSection>
                    <span>Good: {good} </span>
            <span>Neutral: { neutral} </span>
            <span>Bad: {bad} </span>
            <span>Total: {total} </span>
                    <span>PositivePercentage: {positivePercentage}% </span>
                </StatSection>)
        }
       </Container>   
                  
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number
    


}
