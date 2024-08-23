import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Button, IconButton, Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "primary.dark" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            GameShark
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
