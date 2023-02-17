import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    max-width: 20rem;
    margin-bottom: 1.6rem;
  }

  p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
