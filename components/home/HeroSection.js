import styled from 'styled-components'
import retinaImage from 'polished/lib/mixins/retinaImage'

export default () =>
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
      <Greeting><h1>I'm Mohammad Rajabifard</h1></Greeting>
      <Slogan>Making enthusiast and JS lover</Slogan>
    </Texts>
  </Wrapper>

const Wrapper = styled.div`
  grid-column-start: 2;
  grid-column-span: 2;

  display: flex;
  margin-top: 110px;
`

const Pic = styled.div`
  flex: 1 0 350px;
  width: 350px;
  height: 350px;
  overflow: hidden;
  text-indent: -99999px;

  ${retinaImage('/static/mohammad-rajabifard-profile', 'cover', 'jpg', null, '@2x')}

  img {
    width: 1px;
    height: 1px;
    display: block;
  }
`

const Texts = styled.div`
  margin-left: -32px;
`

const leftPadding = '22px'
const rightPadding = '65px'

const Hey = styled.div`
  height: 70px;
  width: 85px;
  line-height: 70px;

  text-align: center;
  box-sizing: border-box;
  background: #F7F7F7;

  img {
    vertical-align: -16px;
  }
`

const Greeting = styled.div`
  display: inline-block;

  height: 70px;
  padding-left: ${leftPadding};
  padding-right: ${rightPadding};

  line-height: 70px;
  background: #6F6F6F;
  color: #fff;

  h1 {
    margin: 0;
    font-weight: 900;
    font-size: 35px;
  }
`

const Slogan = styled.div`
  display: inline-block;

  height: 45px;
  padding-left: ${leftPadding};
  padding-right: ${rightPadding};
  margin: 0;

  line-height: 45px;
  font-weight: normal;
  font-style: italic;
  font-size: 25px;
  background: #EFEFEF;
  color: #636363;
`
