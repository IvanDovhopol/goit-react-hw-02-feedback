import styled from 'styled-components';

export const Wrapper = styled.section`
  display: inline-flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const Btn = styled.button`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.normal} ${p => p.theme.colors.black};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Title = styled.h1`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xl};
`;
