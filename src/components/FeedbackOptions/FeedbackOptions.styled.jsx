import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  background-image: linear-gradient(
    ${p => p.theme.colors.blue} 50%,
    ${p => p.theme.colors.yellow} 50%
  );

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
  cursor: pointer;
`;
