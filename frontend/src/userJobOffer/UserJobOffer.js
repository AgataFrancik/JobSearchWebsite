import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import api from '../api/posts';
import { connect } from 'react-redux';
import { get_user_jobs } from "../actions/auth";

const jobs = [
  {
    Company: "Netia sp z.o.o",
    Salary: "12 000 zł",
    JobName: "Junior front dev",
    Place: "Wroclaw",
    Tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    Company: "Politechnika Wroclawska",
    Salary: "15 000 zł",
    JobName: "Mid backend dev",
    Place: "Wroclaw",
    Tags: ["Java", "SQL"],
  },
  {
    Company: "ING Bank Polszy",
    Salary: "19 000 zł",
    JobName: "Senior backend dev",
    Place: "Wroclaw",
    Tags: ["C#", "SQL", ".NET"],
  },
];

const UserJobOffer = ({ get_user_jobs, isAuthenticated }) => {
  const [search, setSearch] = useState("");
  //const [jobs, setJobs] = useState([]);
  
  const user = localStorage.getItem("user");
  console.log(user);
  useEffect(() => {
    if(isAuthenticated){
      const job = get_user_jobs();
      //setJobs(job);
    // const fetchPosts = async () => {
    //   try{
    //     const response = await api.get(`api/v1/${id}`);
    //     if(response && response.data) setJobs(response.data);
    //     console.log(response.data)
        
    //   } catch(err){
    //     console.log(err.response.data);
    //   }
    // }
    // fetchPosts();
  }
  }, [])

  return (
    <Box width="100%" display="flex" justifyContent="center" marginTop="3rem">
      { isAuthenticated ? (
        <Paper sx={{ width: "85%" }}>
          <Link
            to="/addOffer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button size="large" variant="contained" sx={{ margin: "1rem" }}>
              ADD NEW JOB OFFER
            </Button>
          </Link>
          <TextField
            sx={{ width: "95%", margin: "1rem" }}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          ></TextField>
          {jobs
            .filter((job) => {
              return search.toLocaleLowerCase() === ""
                ? job
                : job.JobName.toLocaleLowerCase().includes(search) ||
                    job.Company.toLocaleLowerCase().includes(search);
            })
            .map((job) => (
              <Card sx={{ margin: "1rem" }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">{job.Company}</Typography>
                    <Box>
                      {job.Tags.map((tag) => (
                        <Chip sx={{ marginRight: "0.4rem" }} label={tag}></Chip>
                      ))}
                    </Box>
                  </Box>
                  <Typography>{job.JobName}</Typography>
                  <Typography>{job.Place}</Typography>
                  <Typography>{job.Salary}</Typography>
                </CardContent>
                <CardActions>
                  <Box width="100%" display="flex" justifyContent="flex-end">
                    <Link
                      to="/offerDetails"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Button
                        sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
                        variant="contained"
                      >
                        CHECK IT
                      </Button>
                    </Link>
                    <Link
                      to="/editOffer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Button
                        sx={{ marginLeft: "1rem", marginBottom: "1rem" }}
                        variant="outlined"
                      >
                        EDIT
                      </Button>
                    </Link>
                    <Button sx={{ marginBottom: "1rem" }}>
                      <DeleteIcon style={{ color: "red", fontSize: 30 }} />
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            ))}
        </Paper>
      ) : (
        <Box>
          <Typography>YOU NEED TO BE LOGGED TO USE THIS SITE</Typography>
          <Typography variant="caption" sx={{ marginTop: "1.5rem" }}>
            Create account{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Click here
            </Link>
          </Typography>
          <Typography variant="caption" sx={{ marginTop: "1.5rem" }}>
            {' '}Already have account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              Click here{" "}
            </Link>
          </Typography>
        </Box>
      )}
    </Box>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect( mapStateToProps ,{get_user_jobs})(UserJobOffer);