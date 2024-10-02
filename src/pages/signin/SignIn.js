import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getAuthTheme from '../../config/theme/getAuthTheme';
import SignInCard from './SignInCard';
import map from '../../assets/images/map.png';

export default function SignInSide() {
  const [mode] = React.useState('light');
  const [showCustomTheme] = React.useState(true);
  const defaultTheme = createTheme({ palette: { mode } });
  const SignInSideTheme = createTheme(getAuthTheme(mode));

  return (
    <ThemeProvider theme={showCustomTheme ? SignInSideTheme : defaultTheme}>
      <CssBaseline enableColorScheme />
      <Stack
        direction="column"
        component="main"
        sx={[
          {
            justifyContent: 'space-between',
          },
          (theme) => ({
            backgroundImage: 'radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
            backgroundSize: 'cover',
            ...theme.applyStyles('dark', {
              backgroundImage: 'radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
            }),
          }),
        ]}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 12, sm: 20 },
            p: 2,
            m: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: { xs: 'auto', md: '100%' },
              maxWidth: '300px',
              width: '100%',
            }}
          >
            <img
              src={map}
              alt="map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <SignInCard />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
