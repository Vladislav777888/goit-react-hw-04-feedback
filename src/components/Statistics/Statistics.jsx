import PropTypes from 'prop-types';
import { Box } from '../Box';

export const Statistics = ({
  options,
  feedbacks,
  total,
  positivePercentage,
}) => {
  return (
    <Box mt={20}>
      {options.map(el => (
        <p key={el.id}>
          {el.title}: {feedbacks[el.id]}
        </p>
      ))}

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </Box>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  feedbacks: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
