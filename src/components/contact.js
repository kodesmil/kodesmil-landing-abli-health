import React from "react";
import { Box, Button, Input, Styled } from "theme-ui";


export class Contact extends React.Component {
    render() {
      return (
        <Box
          anchor="contact"
          sx={{
            paddingTop: ["6em", "6em", "8em", "8em"],
            width: ["80%", "60%", "50%", "40%"],
            mx: "auto"
          }}
          id="contact"
          as="form"
          method="post"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Styled.h3 style={{ textAlign: "center", fontWeight: "900" }}>
            Would you like to learn more?
          </Styled.h3>
          <Styled.p style={{ textAlign: "center", marginTop: "0.5em" }}>
            Leave us your contact
          </Styled.p>
          <Box sx={{ width: ["90%", "65%", "50%", "35%"], mx: "auto", maxWidth: "250px" }} mt='2em'>
            <Input style={{background: "white"}} placeholder="Name" name="name" mb={3} />
            <Input style={{background: "white"}} placeholder="Email" type="email" name="password" mb={3} />
          </Box>
          <Button type="submit" sx={{ mx: "auto", display: "block" }}>
            Submit
          </Button>
  
          <Styled.p style={{ textAlign: "center", marginTop: "24px" }}>
            or use
          </Styled.p>
          <Styled.a
            style={{
              textAlign: "center",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "16px",
            }}
            href="mailto:hello@abli.io?subject=Tell me more about Abli Health"
          >
            hello@abli.io
          </Styled.a>
        </Box>
      )
    }
  }