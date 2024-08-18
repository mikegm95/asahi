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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
