import styled from 'styled-components'

export const UserSummaryContainer = styled.div`
  display: flex;
  max-width: 54rem;
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;
  gap: 2rem;

  background: ${(props) => props.theme['indigo-800']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  > img {
    max-width: 9.25rem;
    height: auto;
    border-radius: 8px;
    margin-left: 0.5rem;
  }

  > a {
    all: unset;
    display: flex;
    gap: 0.5rem;
    height: 1rem;

    font-size: 0.75rem;
    cursor: pointer;
    color: ${(props) => props.theme['blue-300']};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-300']};
    }
  }
`

export const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;

    > h1 {
      font-size: 1.25rem;
      line-height: 130%;

      color: ${(props) => props.theme['indigo-100']};
    }

    > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      > svg {
        color: ${(props) => props.theme['indigo-500']};
      }

      > p {
        color: ${(props) => props.theme['indigo-200']};
      }
    }

    &:first-child {
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    &:last-child {
      margin-top: 1.5rem;
      gap: 1.5rem;
    }
  }

  > p {
    line-height: 160%;
    color: ${(props) => props.theme['indigo-300']};
  }
`
