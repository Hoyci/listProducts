import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 1.6rem 0 3.2rem 0;
`;

export const TypographyContainer = styled.div`
  margin-bottom: 16px;

  span {
    // parar de diminuir em 320px de responsividade
    font-size: clamp(1.2rem, 5vw, 4.2rem);
    font-weight: bold;
    &:first-child {
      color: ${({ theme }) => theme.colors.primary.main};
    }
    &:last-child {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

// parar de diminuir em 320px de responsividade
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 38rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.light};

  input {
    outline: none;
    border: none;
    width: 100%;
    ::placeholder {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }
  img {
    padding: 0.6rem;
    fill: ${({ theme }) => theme.colors.primary.light};
  }
`;
