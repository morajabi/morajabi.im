import { css } from 'styled-components'

import rem from './rem'

export const mobile = body => css`
  @media (max-width: ${rem(940)}) {
    ${body};
  }
`
