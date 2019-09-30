import React, { ComponentProps } from "react"
import styled from "styled-components"

const BadgeStyle = styled.span.attrs(props => ({
  color: props.color || "#f8f9fa",
}))`
  display: inline-block;
  margin: 0em 0.4em;
  padding: 0.25em 0.4em;
  font-size: 100%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: ${props => props.color};
`

const Badge = (props: ComponentProps<typeof BadgeStyle>) => (
  <BadgeStyle {...props} />
)

export default Badge
