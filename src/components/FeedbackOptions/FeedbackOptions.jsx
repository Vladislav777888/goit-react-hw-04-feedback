import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box mt={20} display="flex" width={250} justifyContent="space-between">
      {options.map(option => (
        <Button key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
