import { Box } from '@mui/material';
import logoSrc from '../assets/logoipsum-logo.svg';

export const Logo: React.FC = () => {
  return (
    <Box
      component="img"
      src={logoSrc}
      alt="Logoipsum logo"
      sx={{
        display: 'block',
        width: '128px',
        height: 'auto',
        paddingY: 1
      }}
    />
  );
}