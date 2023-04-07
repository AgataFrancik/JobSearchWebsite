import React from 'react'
import { Box, Paper, Card, Typography, CardContent, CardActions, Button, Chip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const jobs = [
  {
    Company: "Netia sp z.o.o",
    Salary: "12 000 zł",
    JobName: "Junior front dev",
    Place: "Wroclaw",
    Tags: ["JavaScript", "HTML", "CSS"]
  },
  {
    Company: "Politechnika Wroclawska",
    Salary: "15 000 zł",
    JobName: "Mid backend dev",
    Place: "Wroclaw",
    Tags: ["Java", "SQL"]
  },
  {
    Company: "ING Bank Polszy",
    Salary: "19 000 zł",
    JobName: "Senior backend dev",
    Place: "Wroclaw",
    Tags: ["C#", "SQL", ".NET"]
  }
]

export const UserJobOffer = () => {
  return (
    <Box width="100%"  display="flex" justifyContent="center" marginTop="3rem">
      <Paper sx={{width: "85%"}}>
      <Button size='large' variant='contained' sx={{margin: '1rem'}}>ADD NEW JOB OFFER</Button>
        {jobs.map((job) =>(
          <Card sx={{margin: '1rem'}}>
            <CardContent>
              <Box display="flex" justifyContent='space-between'>
                <Typography variant='h4'>{job.Company}</Typography>
                  <Box>
                    {job.Tags.map((tag) => (
                      <Chip sx={{marginRight: "0.4rem"}} label={tag}></Chip>
                    ))
                    }
                  </Box>
              </Box>
              <Typography>{job.JobName}</Typography>
              <Typography>{job.Place}</Typography>
              <Typography>{job.Salary}</Typography>
            </CardContent>
            <CardActions>
              <Box width="100%" display='flex' justifyContent='flex-end'>
                <Button sx={{marginLeft: '1rem', marginBottom: '1rem'}} variant='contained'>CHECK IT</Button>
                <Button sx={{marginLeft: '1rem', marginBottom: '1rem'}} variant='outlined'>EDIT</Button>
                <Button sx={{ marginBottom: '1rem'}}><DeleteIcon style={{ color: 'red', fontSize: 30 }}/></Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Box>
  )
}
