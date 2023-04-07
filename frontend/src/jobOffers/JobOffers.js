import React from 'react'
import { Box, Paper, Card, Typography, CardContent } from '@mui/material'

const jobs = [
  {
    Company: "eoeoe",
    Salary: "12 000",
    JobName: "Junior front dev",
    Place: "Wroclaw",
    Tags: ["JS", "HTML", "CSS"]
  },
  {
    Company: "doiasj",
    Salary: "15 000",
    JobName: "Mid backend dev",
    Place: "Wroclaw",
    Tags: ["Java", "SQL"]
  },
]

export const JobOffers = () => {
  return (
    <Box width="100%" height="90vh" display="flex" justifyContent="center" alignItems="center">
      <Paper>
        {jobs.map((job) =>(
          <Card>
            <CardContent>

            </CardContent>
          </Card>
        ))}
      </Paper>
    </Box>
  )
}
