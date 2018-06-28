import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${p => (p.wide ? 800 : 700)}px;
`

export default Container
