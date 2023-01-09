import styled from 'styled-components'

export const PostSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;
  gap: 0.5rem;

  background: ${(props) => props.theme['indigo-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  > nav {
    display: flex;
    justify-content: space-between;
    height: 19px;

    font-size: 0.75rem;
    color: ${(props) => props.theme['blue-300']};

    > a {
      all: unset;
      display: flex;
      gap: 0.5rem;

      height: 1rem;
      cursor: pointer;

      &:first-child {
        align-items: center;
      }
    }
  }

  > h1 {
    margin-top: 0.75rem;
    font-size: 1.5rem;

    color: ${(props) => props.theme['indigo-100']};
  }
`

export const SummaryInfo = styled.div`
  display: flex;
  height: 26px;
  gap: 2rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > svg {
      color: ${(props) => props.theme['indigo-500']};
    }

    > p {
      color: ${(props) => props.theme['indigo-400']};
    }
  }
`
