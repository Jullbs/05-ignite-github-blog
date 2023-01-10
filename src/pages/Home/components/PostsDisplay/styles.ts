import styled from 'styled-components'

export const PostsDisplayContainer = styled.div`
  display: flex;
  max-width: 54rem;

  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    > li {
      list-style-type: none;
    }
  }
`

export const PostCard = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  max-width: 26rem;
  padding: 2rem;
  gap: 1.25rem;
  border-radius: 10px;

  background: ${(props) => props.theme['indigo-700']};
  border: 2px solid ${(props) => props.theme['indigo-700']};
  transition: border 0.75s;

  > span {
    display: flex;
    gap: 1rem;

    > h2 {
      max-width: 17rem;
      font-size: 1.25rem;
      line-height: 160%;
      color: ${(props) => props.theme['indigo-100']};
    }

    > p {
      font-size: 0.875rem;
      margin-top: 5px;
    }
  }

  .react-markdown {
    line-height: 160%;
    max-width: 21.75rem;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['indigo-500']};
  }
`
