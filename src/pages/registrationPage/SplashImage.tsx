import { Box, useTheme } from "@mui/material";
import splashImage from '../../assets/business-meeting-diverse-team-handshake.jpg';

export const SplashImage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[200],
        backgroundImage: `
          linear-gradient(to top, ${theme.palette.primary.main}64, ${theme.palette.primary.main}00 50%),
          linear-gradient(to right, ${theme.palette.primary.main}64, ${theme.palette.primary.main}00 50%),
          url(${splashImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    />
  );
};
