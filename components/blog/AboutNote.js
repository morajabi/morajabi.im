import styled from 'styled-components'

import rem from 'utils/rem'

const Wrapper = styled.p`
  margin: 0;
  font-size: ${rem(13)};
  opacity: 0.8;
  transition: opacity 100ms ease-out;

  &:hover {
    opacity: 1;
  }
`

const AboutNote = () => (
  <Wrapper>
    <a href="http://morajabi.me">Mohammad R.</a>{' '}
    writes here.<br />
    Photos, tutorials and journeys.<br />
    It's 2017.
  </Wrapper>
)

export default AboutNote
