import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box mt={20} display="flex" width={250} justifyContent="space-between">
      {options.map(option => (
        <Button
          key={option.id}
          onClick={onLeaveFeedback}
          type="button"
          name={option.id}
        >
          {option.title}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
