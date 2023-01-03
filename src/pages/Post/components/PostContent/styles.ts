import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 54rem;
  padding: 2rem;

  line-height: 160%;
  color: ${(props) => props.theme['indigo-300']};
`
