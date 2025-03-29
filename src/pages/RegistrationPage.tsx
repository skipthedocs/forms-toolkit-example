import { Box } from '@mui/material';
import { SplashImage } from './registrationPage/SplashImage';
import { RegistrationForm } from './registrationPage/RegistrationForm';

export const RegistrationPage = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        '& > :first-child': {
          display: { xs: 'none', md: 'block' },
          flex: 4,
        },
        '& > :last-child': {
          flex: 6,
        },
      }}
    >
      <SplashImage />
      <RegistrationForm />
    </Box>
  );
};