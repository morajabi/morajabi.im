import styled from 'styled-components'

import rem from 'utils/rem'

const Tag = styled.a`
  display: inline-block;
  padding: ${rem(2)} ${rem(5)};
  letter-spacing: ${rem(0.9)};
  background: #f2f2f2;
  cursor: pointer;
  transition: background 100ms ease-out;

  &:before {
    content: '#';
    color: #c0c0c0;
    margin-right: ${rem(2)};
  }

  &:hover {
    background: #e0e0e0;
  }
`

export default Tag
