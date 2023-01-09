import PropTypes from 'prop-types';

import { Box } from '../Box';

export const Notification = ({ message }) => {
  return (
    <Box mt={20}>
      <p>{message}</p>
    </Box>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
