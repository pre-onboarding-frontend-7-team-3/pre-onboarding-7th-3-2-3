import { useNavigate } from "react-router";
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { apiClient } from "@src/shared/api/client";

const theme = createTheme();

export const loginApi = async (email: string, password: string) => {
  return apiClient.post("/login", { email, password });
};

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    loginApi("hi1@test.com", "A12341234!")
      .then((res) => {
        localStorage.setItem("access_token", res.data.accessToken);
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginRight: 5,
            }}
          >
            <img src="preface_Icon.png" alt="preface_Icon" />
          </Box>
          <img
            src="preface_Text.png"
            alt="preface_Text"
            width="200"
            height="50"
          />
        </Box>

        <Container
          component="main"
          maxWidth="xs"
          sx={{
            marginTop: 5,
            border: "2px solid #0F243C",
            borderRadius: 5,
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              marginBottom: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#0F243C" }}
              >
                LogIn
              </Button>
            </Box>
          </Box>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
