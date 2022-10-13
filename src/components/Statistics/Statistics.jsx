import PropTypes from 'prop-types';
import { StatText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatText>good: {good}</StatText>
      <StatText>neutral: {neutral}</StatText>
      <StatText>bad: {bad}</StatText>
      <StatText>total: {total}</StatText>
      <StatText>positive feedback: {positivePercentage} %</StatText>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
