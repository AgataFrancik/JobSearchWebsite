import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../context/authProvider";
import { Link, Navigate} from "react-router-dom";
import { connect } from "react-redux";
import { login as login1 } from "../actions/auth";
import api from '../api/posts';
console.log('imported login:', login1);

export const Login = ({login, isAuthenticated}) => {
  console.log('login prop:', login);
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //=====================

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    console.log('onSubmit login:', login1);
    console.log('onSubmit user:', email);
    console.log('onSubmit pwd:', password);
    e.preventDefault();
    login1(email, password);
  };

  const continueWithGoogle = async () => {
    try{
      const response = await api.get('api/v1/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/google')
      window.location.replace(response.data.authorization_url);
    }catch(err){

    }
  }

  //==================================

  useEffect(() => {
    //userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  if(isAuthenticated){
    return <Navigate to='/'/>
  }

  return (
    <>
      {success ? (
        <Typography>OK </Typography>
      ) : (
        <Box
          width="100%"
          height="90vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Paper sx={{ height: "60vh", width: 280, padding: "1rem" }}>
            <Typography
              ref={errRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </Typography>
            <Typography variant="h4">Login</Typography>
            <Box display="flex" flexDirection="column" padding="1rem">
              <form onSubmit={(e) => onSubmit(e)}>
                <TextField
                  size="small"
                  placeholder="Username"
                  sx={{ marginBottom: "1rem" }}
                  onChange={(e) => onChange(e)}
                  ref={userRef}
                  value={email}
                  name="email"
                  id="username"
                  required
                ></TextField>
                <TextField
                  type="password"
                  size="small"
                  name="password"
                  placeholder="Password"
                  sx={{ marginBottom: "2rem" }}
                  onChange={(e) => onChange(e)}
                  value={password}
                  id="password"
                  required
                ></TextField>
                <Button style={{margin: '0.5rem'}} variant="contained" type="submit">
                  Login
                </Button>
              </form>
              <Button style={{margin: '0.5rem'}} color="error" variant="contained" onClick={continueWithGoogle}>
              Continue with Google
              </Button>
              <Typography variant="caption" sx={{ marginTop: "1.5rem" }}>
                Dont have account yet?{" "}
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Click here
                </Link>
              </Typography>
              <Typography variant="caption" sx={{ marginTop: "0.5rem" }}>
                Forgot password? {" "}
                <Link
                  to="/resetPassword"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Reset Password
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

 const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
 })

export default connect(mapStateToProps,{login1} )(Login)