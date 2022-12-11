import styled from 'styled-components';

export const List = styled.ul`
  display: inherit;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const Item = styled.li`
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Count = styled.span`
  color: ${p => p.theme.colors.white};
`;

