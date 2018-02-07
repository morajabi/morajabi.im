import styled, { css } from 'styled-components'
import retinaImage from 'polished/lib/mixins/retinaImage'

import { mobile } from '../../utils/media'

export default () => (
  <Wrapper>
    <Pic>
      <img
        src="/static/mohammad-rajabifard-profile.jpg"
        alt="Mohammad Rajabifard face b&w"
      />
    </Pic>
    <Texts>
      <Hey>
        <img
          src="/static/icons/waving-hand.svg"
          alt="waving hand - hey"
          height="47"
        />
      </Hey>
      <Greeting>
        <h1>I'm Mohammad Rajabifard</h1>
      </Greeting>
      <Slogan>Making enthusiast and JS lover</Slogan>
    </Texts>
  </Wrapper>
)

const Wrapper = styled.div`
  grid-column-start: 2;
  grid-column-span: 2;

  display: flex;
  margin-top: 110px;

  ${mobile(css`
    margin-top: 60px;
  `)};
`

const Pic = styled.div`
  flex: 1 0 auto;
  width: 350px;
  height: 350px;
  overflow: hidden;
  text-indent: -99999px;

  ${retinaImage(
    '/static/mohammad-rajabifard-profile',
    'cover',
    'jpg',
    null,
    '@2x'
  )};

  ${mobile(css`
    width: 120px;
    height: 120px;
    background-size: cover;
  `)};

  img {
    width: 1px;
    height: 1px;
    display: block;
  }
`

const Texts = styled.div`
  --text-height: 70px;
  --text-left-padding: 22px;
  --text-right-padding: 65px;

  margin-left: -32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${mobile(css`
    --text-height: 40px;
    --text-left-padding: 12px;
    --text-right-padding: 14px;

    margin-left: -30px;
  `)};
`

const Hey = styled.div`
  width: 85px;
  height: var(--text-height);
  line-height: var(--text-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #f7f7f7;

  ${mobile(css`
    width: 50px;

    img {
      height: calc(var(--text-height) - 10px);
    }
  `)};
`

const Greeting = styled.div`
  display: inline-block;

  height: var(--text-height);
  line-height: var(--text-height);
  padding-left: var(--text-left-padding);
  padding-right: var(--text-right-padding);
  overflow: hidden;

  background: #6f6f6f;
  color: #fff;

  h1 {
    margin: 0;
    font-weight: 900;
    font-size: 35px;

    ${mobile(css`
      font-size: 25px;
    `)};
  }
`

const Slogan = styled.div`
  display: inline-block;

  height: 45px;
  line-height: 45px;
  padding-left: var(--text-left-padding);
  padding-right: var(--text-right-padding);
  margin: 0;

  font-weight: normal;
  font-style: italic;
  font-size: 25px;
  background: #efefef;
  color: #636363;

  ${mobile(css`
    height: 25px;
    line-height: 25px;
    font-size: 17px;
  `)};
`
