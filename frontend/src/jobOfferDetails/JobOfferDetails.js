import React from 'react'
import { Box, Button, Paper, TextField, Typography} from '@mui/material'

const job =
  {
    Company: "Netia sp z.o.o",
    Salary: "12 000 zł",
    JobName: "Junior front dev",
    Place: "Wroclaw",
    Describtion: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, ",
    Contact: "+ 48 111 111 111",
    Tags: ["JavaScript", "HTML", "CSS"]
  }

export const JobOfferDetails = () => {
  return (
    <Box width="100%"  display="flex" justifyContent="center" marginTop="3rem">
        <Paper sx={{width: "75%", padding: '1rem'}}>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h3'>{job.JobName}</Typography>
            <Typography variant='h6'>{job.Company}</Typography>
            <Typography variant='h6'>{job.Salary}</Typography>
            <Typography variant='h6'>{job.Place}</Typography>
            <Typography variant='h6'>{job.Describtion}</Typography>
            <Typography variant='h6'>Contact: {job.Contact}</Typography>
          </Box>
        </Paper>
    </Box>
  )
}
