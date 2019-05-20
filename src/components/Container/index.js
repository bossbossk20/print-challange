import React from 'react'
import styled from 'styled-components'

import theme from '../../core/theme'

const StyledContainer = styled.div`
  padding: ${theme.default.space.container};
`

const Container = props => {
  const { children } = props
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
