import React from 'react'
import { Box, Paper, Card, Typography, CardContent, CardActions, Button, Chip, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

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

export const JobOffers = () => {
  return (
    <Box width="100%"  display="flex" justifyContent="center" marginTop="3rem">
      <Paper sx={{width: "85%"}}>
      <TextField sx={{width: "95%", margin: '1rem'}} placeholder="Search" InputProps={{
        startAdornment: <SearchIcon />
      }} ></TextField>
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
                <Link to="/offerDetails" style={{ textDecoration: "none", color: "inherit" }}>
                  <Button sx={{marginLeft: '1rem', marginBottom: '1rem', marginRight: '1rem'}} variant='contained'>CHECK IT</Button>
                </Link>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Box>
  )
}
