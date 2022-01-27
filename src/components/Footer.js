import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
function Footer() {
    return (
      <AppBar position="static" color="FooterAndHeader">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1"  >
              © 2022 By Ali Nosratipour || API from www.tvmaze.com
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default Footer
