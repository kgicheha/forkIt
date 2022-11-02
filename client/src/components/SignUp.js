import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import { red } from "@mui/material/colors";
import {
  Typography,
  Button,
  CssBaseline,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

function SignUp() {
  //storing data from the form
  const { register, handleSubmit } = useForm();
  //to display the errors
  const [errors, setErrors] = useState([]);

  //gives you access to the history instance that you may use to navigate.
  //  const history = useHistory();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);

    // make post request on submit
    // fetch(`/signup`, {
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
    //       history.push(`/login`);
    //     });
    //   } else {
    //     res.json().then((json) => setErrors(Object.entries(json.errors)));
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
      <div id="signUpDiv">
        <Stack spacing={2}>
          <Container maxWidth="max-content"></Container>
          <div className="customForm">
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <Typography variant="h6">Create profile</Typography>
                {errors
                  ? errors.map((e) => (
                      <div className="displayedErrors">
                        {e[0] + ": " + e[1]}
                      </div>
                    ))
                  : null}
                <br />
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="First Name*"
                    id="outlined-error-helper-text"
                    fullWidth
                    variant="outlined"
                    {...register("first_name")}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="Last Name*"
                    id="outlined-error-helper-text"
                    fullWidth
                    variant="outlined"
                    {...register("last_name")}
                  />
                </Box>

                <Box mb={2}>
                  <TextField
                    type="email"
                    label="email"
                    id="outlined-error-helper-text"
                    fullWidth
                    variant="outlined"
                    {...register("email")}
                    placeholder="example@gmail.com"
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="password"
                    label="password"
                    id="outlined-error-helper-text"
                    fullWidth
                    variant="outlined"
                    {...register("password")}
                    placeholder="*********"
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="Allergies"
                    id="outlined-error-helper-text"
                    fullWidth
                    variant="outlined"
                    {...register("allergies")}
                    placeholder="Ingredients you're allergies to"
                  />
                </Box>
                <Box mb={2}>
                  <CustomButton
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                  >
                    Create Account
                  </CustomButton>
                </Box>
                <Typography variant="subtitle1">
                  Already have an an account?
                  <a id="signuplink" href="/login">
                    {" "}
                    Sign in
                  </a>
                </Typography>
              </form>
            </Container>
          </div>
        </Stack>
      </div>
    </>
  );
}

export default SignUp;
