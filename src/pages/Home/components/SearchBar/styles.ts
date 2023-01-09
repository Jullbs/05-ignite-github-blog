import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  gap: 0.75rem;
  margin-top: 1.5rem;

  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.125rem;
      line-height: 160%;
    }

    p {
      font-size: 0.875rem;
    }
  }

  > form {
    > input {
      width: 54rem;
      padding: 0.75rem 1rem;

      background: ${(props) => props.theme['indigo-1000']};
      border: 1px solid ${(props) => props.theme['indigo-600']};
      border-radius: 6px;

      color: ${(props) => props.theme['indigo-300']};

      &::placeholder {
        color: ${(props) => props.theme['indigo-500']};
      }

      &:focus {
        outline: 1px solid ${(props) => props.theme['blue-300']};
      }
    }
  }
`
