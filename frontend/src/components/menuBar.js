import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import React from 'react'

export const MenuBar = () => {
    var token = true;
  return (
    <Paper sx={{borderRadius: "1rem", width: "10rem"}}>
      <Box sx={{ backgroundColor: 'primary', width: '100%', height: '7rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          { token ? 
          <Box>
              <Button>Settings</Button>
              <Divider variant='middle'></Divider>
              <Button>Log Out</Button>
          </Box>
          :
          <Box>
              <Button>Login</Button>
              <Divider variant='middle'></Divider>
              <Button>Create account</Button>
          </Box>
          }
      </Box>
    </Paper>
  )
}
