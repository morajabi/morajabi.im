import styled from 'styled-components'

// Local
import ZigZag from '../../vectors/ZigZag'
import Container from '../shared/Container'

const Header = () => (
  <Wrapper>
    <Container wide>
      <Stack>
        <Photo src="/static/Mo.jpg" />
        <Content>
          <Title>I’m Mo. </Title>
          <Bio>
            Don’t care about money, trying to be happier, dropped out of high
            school. Seventeen.{' '}
          </Bio>
          <ZigZag />
        </Content>
      </Stack>
    </Container>
  </Wrapper>
)

export default Header

// Styles
const Wrapper = styled.header`
  background: linear-gradient(
    180deg,
    rgba(25, 157, 166, 0.1) 0%,
    rgba(255, 255, 255, 0) 22.81%
  );
`

const Stack = styled.div`
  height: 170px;
  display: flex;
  align-items: center;
`

const Photo = styled.img`
  width: 68px;
  height: 68px;
  overflow: hidden;
  border-radius: ${p => p.theme.radiusBig}px;

  margin-right: 25px;
`

const Content = styled.div``

const Title = styled.h1`
  margin: 0;

  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  color: #888;
`

const Bio = styled.p`
  margin: 0 0 4px 0;

  font-size: 15px;
  font-weight: normal;
  line-height: 1.5;
  color: #999;
`
