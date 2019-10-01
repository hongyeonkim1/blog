import React, { ComponentProps } from "react"
import styled from "styled-components"

const BadgePillStyle = styled.span.attrs(props => ({
  color: props.color || "#007bff",
}))`
  display: inline-block;
  padding: 0.1em 0.6em 0.25em 0.6em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  border-radius: 10rem;
  color: #fff;
  background-color: ${props => props.color};
  margin-right: 5px;
`

function BadgePill(props: ComponentProps<typeof BadgePillStyle>) {
  return <BadgePillStyle {...props} />
}

export default BadgePill
