import PropTypes from 'prop-types';
import { Box } from '../Box';

export const Section = ({ title, children }) => {
  return (
    <Box pt={20} as="section">
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
