import styled, { css } from 'styled-components'

// Utils
import { mobile } from '../../utils/media'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${p => (p.wide ? 800 : 700)}px;

  ${mobile(css`
    padding: 0 18px;
  `)};
`

export default Container
