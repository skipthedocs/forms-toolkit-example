import { Box, Container, Typography, useTheme } from "@mui/material";
import { Logo } from "../../components/Logo";

export const RegistrationForm: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        overflow: "scroll",
      }}
    >
      <Container
        sx={{
          marginX: "auto",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 3,
        }}
        maxWidth="md"
      >
        <Logo />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: theme.palette.text.primary,
              fontWeight: "bold",
            }}
          >
            Register for a free trial
          </Typography>
          <Typography
            variant="subtitle1"
            component="h1"
            gutterBottom
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "600px",
            }}
          >
            Fill out the registration form to immediately start your 14-day free
            trial.&nbsp;
            <i>(This form is just a demo – it doesn't actually do anything!)</i>
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};
