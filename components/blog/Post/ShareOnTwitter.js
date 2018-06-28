import styled from 'styled-components'

export default ({ link, text }) => (
  <Wrapper
    href={encodeURI(
      `https://twitter.com/intent/tweet/?text=${text}&url=${link}`
    )}
    target="_blank"
    aria-label="Share on Twitter"
  >
    <Icon aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
      </svg>
    </Icon>
    <span>Share on Twitter</span>
  </Wrapper>
)

// Styles
const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  height: 42px;
  padding: 0 14px;
  line-height: 1;
  vertical-align: middle;

  text-decoration: none;
  font-size: 18px;

  color: #447;
  border-radius: 4px;
  background: #f4f4f8;
  transition: background 120ms ease;

  &:hover {
    background: #efeff3;
  }

  &:active {
    background: #e5e5e8;
  }
`

const Icon = styled.span`
  margin-right: 7px;
  display: block;
  margin-top: 2px;

  svg {
    width: 18px;
    height: 18px;
    fill: #77a;
  }
`
