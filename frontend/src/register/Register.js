import React from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Box width="100%" height="90vh" display="flex" justifyContent="center" alignItems="center">
    <Paper sx={{height: "60vh", width: 280, padding: "1rem"}}>
      <Typography variant='h4'>Register</Typography>
      <Box display="flex" flexDirection="column" padding="1rem">
        <TextField size='small' label='Login' sx={{ marginBottom: '1rem'}}></TextField>
        <TextField size='small' label='Password' sx={{ marginBottom: '1rem'}}></TextField>
        <TextField size='small' label='Confirm password' sx={{ marginBottom: '1rem'}}></TextField>
        <TextField size='small' label='E-mail' sx={{ marginBottom: '1rem'}}></TextField>
        <TextField size='small' label='Phone number' sx={{ marginBottom: '2rem'}}></TextField>
        <Button size='large' variant='contained'>Register</Button>
        <Typography variant="caption" sx={{marginTop: "1.5rem"}}>Already have account? <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}> Click here </Link></Typography>
      </Box>
    </Paper>
  </Box>
  )
}
