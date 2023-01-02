import styled from 'styled-components'

export const PostsDisplayContainer = styled.div`
  display: flex;
  max-width: 54rem;
  flex-wrap: wrap;
  gap: 2rem;
`

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 26rem;
  padding: 2rem;
  gap: 1.25rem;
  border-radius: 10px;

  background: ${(props) => props.theme['indigo-700']};

  > span {
    display: flex;
    gap: 1rem;

    > h2 {
      max-width: 17.6875rem;
      font-size: 1.25rem;
      line-height: 160%;
    }

    > p {
      font-size: 0.875rem;
      margin-top: 5px;
    }
  }

  > p {
    line-height: 160%;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
