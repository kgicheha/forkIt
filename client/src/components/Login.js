import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { styled, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import {
  Typography,
  Button,
  CssBaseline,
  Container,
  InputLabel,
  Input,
  TextField,
  Box,
} from "@mui/material";

function Login() {
  //storing data from the form
  const { register, handleSubmit } = useForm();

  //to display the errors
  const [errors, setErrors] = useState([]);

  //gives you access to the history instance that you may use to navigate.
  // const history = useHistory();

  const onSubmit = (data) => {
    // e.preventDefault();
    // make post request on submit
    // fetch(`/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   if (res.ok) {
    //     res.json().then((user) => {
    //       updateUser(user);
    //       history.push(`/home/${user.id}`);
    //     });
    //   } else {
    //     res.json().then((json) => setErrors(json.errors));
    //   }
    // });
  };

  // CUSTOM CSS
  const CustomButton = styled(Button)({
    fontWeight: "bold",
    backgroundColor: "#078080",
    color: "#ffffff",
    // color: "#232323",
    "&:hover": {
      backgroundColor: "#137474",
    },
  });
  // CUSTOM CSS ^^

  return (
    <>
      <CssBaseline />
      <div id="loginDiv">
        <Stack spacing={2}>
          {/* <Container maxWidth="max-content"> */}
            <img src="/signInPagePhoto.jpg" alt="saladPlate" height="400" width="400"/>
          {/* </Container> */}

          <div className="customForm">
            {/* <Container> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" id ="signInHeader">Sign in</Typography>
                {errors ? (
                  <div className="displayedErrors">{errors}</div>
                ) : null}
                <br />
                <Box mb={2}>
                  <TextField
                    type="email"
                    label="email"
                    fullWidth
                    variant="outlined"
                    {...register("email")}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="password"
                    label="password"
                    variant="outlined"
                    fullWidth
                    {...register("password")}
                  />
                </Box>
                <CustomButton
                  type="submit"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Sign in
                </CustomButton>
              </form>
              <br />
              <Typography variant="subtitle1">
                New User?
                <a id="signuplink" href="/signup">
                  {" "}
                  Create an account
                </a>
              </Typography>
            {/* </Container> */}
          </div>
        </Stack>
      </div>
    </>
  );
}

export default Login;
