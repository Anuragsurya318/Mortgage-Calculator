import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" component="a" href="https://google.com" target="_blank" sx={{ flexGrow: 1 }} style={{ color: "white", textDecoration: "none" }}>
            Bank of react
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
