import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

export const MenuBar = () => {
    var token = false;
  return (
    <Paper sx={{borderRadius: "1rem", width: "10rem"}}>
      <Box sx={{ backgroundColor: 'primary', width: '100%', height: '7rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          { token ? 
          <Box>
              <Link to="/settings" style={{ textDecoration: 'none', color: "inherit" }}>
                <Button>Settings</Button>
              </Link>
              <Divider variant='middle'></Divider>
              <Button>Log Out</Button>
          </Box>
          :
          <Box>
              <Link to="/login" style={{ textDecoration: 'none', color: "inherit" }}>
                <Button>Login</Button>
              </Link>
              <Divider variant='middle'></Divider>
              <Link to="/register" style={{ textDecoration: 'none', color: "inherit" }}>
                <Button>Create account</Button>
                </Link>
          </Box>
          }
      </Box>
    </Paper>
  )
}
