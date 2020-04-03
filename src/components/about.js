import React from "react"
import { Box, Styled } from "theme-ui"

export class About extends React.Component {
  render() {
    return (
      <Box
        sx={{
          width: ["80%", "60%", "50%", "35%"],
          paddingBottom: ["4em", "4em", "8em", "8em"],
          mx: "auto",
        }}
      >
        <Styled.h2 style={{}}>
          Benefits
        </Styled.h2>
        <Styled.p style={{paddingTop: "1em" } }>
          {this.props.data.description}
        </Styled.p>
      </Box>
    )
  }
}
