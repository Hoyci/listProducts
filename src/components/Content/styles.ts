import styled from 'styled-components';

export const ContentHeader = styled.header`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main};
    padding-bottom: 0.8rem;

    button {
      display: flex;
      align-items: center;
      padding: 0.4rem 0.6rem;
      width: 50%;

      border: none;
      border-radius: 0.2rem;
      background-color: ${({ theme }) => theme.colors.gray.main};
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

      color: ${({ theme }) => theme.colors.primary.main};

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.gray.light};
      }

      img {
        margin-right: 0.5rem;
        fill: ${({ theme }) => theme.colors.primary.light};
      }
    }

    p {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const ContentBody = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));

  gap: 1rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  gap: 0 1rem;
`;

export const FilterContainer = styled.div`
  p {
    margin-bottom: 0.8rem;
  }
  main {
    border-top: 1px solid ${({ theme }) => theme.colors.primary.main};
    margin-top: 0.8rem;

    div {
      margin-bottom: 0.8rem;
      &:first-child {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  p {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: 0.8rem;
  }
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.main};
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.main};
  padding-top: 1.6rem;

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    text-align: center;
  }
`;
