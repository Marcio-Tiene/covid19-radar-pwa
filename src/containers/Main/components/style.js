import styled, { css } from 'styled-components';
import { CardContent, Typography } from '../../../components';

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
  ${(p) =>
    isNaN(Number(p.children)) &&
    css`
      font-size: 1rem;
      line-height: 3.75rem;
    `}
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;

  justify-content: space-between;
  padding: 25px;
`;

export const TypografyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;

export const SelectorContainer = styled.div`
  padding: 0px 25px 25px;
`;
