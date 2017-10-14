import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mostlyBlack } from 'utils/colors'

const Tag = styled.a`
  display: inline-block;
  padding: ${rem(2)} ${rem(5)};
  letter-spacing: ${rem(0.9)};
  text-decoration: none;
  background: #f2f2f2;
  color: ${mostlyBlack};
  cursor: pointer;
  transition: background 100ms ease-out;

  &:before {
    content: '#';
    opacity: 0.4;
    margin-right: ${rem(2)};
  }

  &:focus {
    outline: 2px solid #888;
  }

  ${props => props.active ? css`
    color: #fff;
    background: blue;

    &:before {
      opacity: 0.7;
    }

    &:hover,
    &:focus {
      background: darkBlue;
    }
  `: css`
    &:hover,
    &:focus {
      background: #e0e0e0;
    }
  `}
`

export default Tag
