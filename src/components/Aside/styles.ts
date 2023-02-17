import styled from 'styled-components';

export const AsideContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 85vw;
  height: 100vh;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  z-index: 2;

  padding: 1.6rem;
`;

export const AsideHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.8rem;

  span {
    display: flex;
    align-items: center;
    img {
      margin-right: 0.8rem;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.gray.light};
    padding: 0.8rem 1.6rem;
    border-radius: 0.6rem;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray.main};
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  left: 85vw;
  background: transparent;
  padding: 1rem;
  z-index: 2;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export const AsideOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
