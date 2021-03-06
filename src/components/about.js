import React from "react"
import { Box, Styled } from "theme-ui"

export class About extends React.Component {
  render() {
    return (
      <Box
        sx={{
          paddingBottom: ["4em", "4em", "8em", "8em"],
          width: ["80%", "60%", "50%", "35%"],
          mx: "auto",
        }}
      >
        <Styled.h2 style={{paddingBottom: "1em" }}>
          Benefits
        </Styled.h2>
        <Styled.p style={{ }}>
          {this.props.data.description}
        </Styled.p>
      </Box>
    )
  }
}
