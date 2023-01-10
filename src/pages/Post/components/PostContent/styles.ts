import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 54rem;
  padding: 2rem;

  line-height: 160%;
  color: ${(props) => props.theme['indigo-300']};

  .react-markdown {
    h1,
    h2,
    h3,
    h4,
    h5 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;

      color: ${(props) => props.theme['blue-300']};
    }

    a {
      color: ${(props) => props.theme['blue-300']};
    }

    li {
      margin: 0 1rem;
    }

    code {
      display: flex;
      padding: 1rem;
      margin: 1rem 0;

      font-family: 'Fira Code', monospace;
      background: ${(props) => props.theme['indigo-700']};
      color: #4f6173;
    }

    img {
      width: 100%;
    }
  }
`
