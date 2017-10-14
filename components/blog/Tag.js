import styled from 'styled-components'

import rem from 'utils/rem'

const Tag = styled.a`
  display: inline-block;
  padding: ${rem(2)} ${rem(5)};
  letter-spacing: ${rem(0.9)};
  text-decoration: none;
  background: #f2f2f2;
  cursor: pointer;
  transition: background 100ms ease-out;

  &:before {
    content: '#';
    color: #c0c0c0;
    margin-right: ${rem(2)};
  }

  &:hover,
  &:focus {
    background: #e0e0e0;
  }

  &:focus {
    outline: 2px solid #888;
  }
`

export default Tag
