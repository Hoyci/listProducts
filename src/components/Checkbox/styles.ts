import styled from 'styled-components';

export const Container = styled.div`
  input[type='checkbox'] {
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.16rem;
    margin-right: 0.6rem;
    border: 0.22rem solid ${({ theme }) => theme.colors.primary.light};
    outline: none;
    cursor: pointer;

    .checked {
      background-color: ${({ theme }) => theme.colors.primary.light};
      position: relative;
    }

    .checked::before {
      content: '\\2714';
      position: absolute;
      font-size: 1.6rem;
      color: #fff;
      right: 0.1rem;
      top: -0.5rem;
    }

    &:checked {
      position: relative;
      background-color: ${({ theme }) => theme.colors.primary.light};
    }

    &:checked::before {
      content: '\\2714';
      font-size: 1.6rem;
      color: #fff;
      position: absolute;
      right: -0.2rem;
      top: -0.3rem;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
