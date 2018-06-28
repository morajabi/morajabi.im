import styled from 'styled-components'
import Link from 'next/link'

// Local
import ZigZag from '../../../vectors/ZigZag'

const TopBar = () => (
  <Wrapper>
    <Stack>
      <Link href="/blog" prefetch>
        <a>
          <Photo src="/static/Mo.jpg" />
        </a>
      </Link>
      <ZigZag />
    </Stack>
  </Wrapper>
)

export default TopBar

// Styles
const Wrapper = styled.nav`
  background: linear-gradient(
    180deg,
    rgba(25, 157, 166, 0.1) 0%,
    rgba(255, 255, 255, 0) 22.81%
  );
`

const Stack = styled.div`
  height: 120px;
  margin-bottom: 50px;
  padding-left: 35px;

  display: flex;
  align-items: center;
`

const Photo = styled.img`
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: ${p => p.theme.radiusBig}px;
  margin-right: 25px;
  filter: saturate(0);

  &:hover {
    filter: contrast(1.05) brightness(1.05);
  }
`
