import styled from 'styled-components'

import rem from 'utils/rem'

const Wrapper = styled.p`
  padding-top: ${rem(5)};
  font-size: ${rem(20)};
  font-weight: bold;
  color: #999;
`

const CenterMsg = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default CenterMsg
