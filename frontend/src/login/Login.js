import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Box width="100%" height="90vh" display="flex" justifyContent="center" alignItems="center">
      <Paper sx={{height: "40vh", width: 280, padding: "1rem"}}>
        <Typography variant='h4'>Login</Typography>
        <Box display="flex" flexDirection="column" padding="1rem">
          <TextField size='small' placeholder='Login' sx={{ marginBottom: '1rem'}}></TextField>
          <TextField size='small' placeholder='Password' sx={{ marginBottom: '2rem'}}></TextField>
          <Button size='large' variant='contained'>Login</Button>
          <Typography variant="caption" sx={{marginTop: "1.5rem"}}>Dont have account yet? <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}> Click here </Link></Typography>
        </Box>
      </Paper>
    </Box>
  )
}
