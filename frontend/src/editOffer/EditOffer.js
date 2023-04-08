import React from 'react'
import { Box, Button, Paper, TextField, Typography} from '@mui/material'

export const EditOffer = () => {
  return (
    <Box width="100%"  display="flex" justifyContent="center" marginTop="3rem">
        <Paper sx={{width: "65%", padding: '1rem'}}>
            <Typography variant='h4' sx={{marginBottom: "2rem"}}>EDIT OFFER</Typography>
            <Box display="flex" flexDirection='column'>
                <TextField placeholder='Company name'></TextField>
                <TextField placeholder='Salary'></TextField>
                <TextField placeholder='Job name'></TextField>
                <TextField placeholder='Place'></TextField>
                <TextField placeholder='Tags'></TextField>
                <Button variant='contained' sx={{width: "20%", margin: '1rem'}}>EDIT</Button>
            </Box>
        </Paper>
    </Box>
  )
}
