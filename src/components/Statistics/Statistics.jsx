import PropTypes from 'prop-types';
import { StatContainer, StatText, StatNum } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatContainer>
      <StatText>
        Good:<StatNum>{good}</StatNum>
      </StatText>
      <StatText>
        Neutral:<StatNum>{neutral}</StatNum>
      </StatText>
      <StatText>
        Bad:<StatNum>{bad}</StatNum>
      </StatText>
      <StatText>
        Total:<StatNum>{total}</StatNum>
      </StatText>
      <StatText>
        Positive feedback:
        <StatNum>{good ? positivePercentage + '%' : 0}</StatNum>
      </StatText>
    </StatContainer>
  );
}

Statistics.protoType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
