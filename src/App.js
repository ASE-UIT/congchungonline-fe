import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getDesignTokens from './config/theme/themePrimitives';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routes/PrivateRoute';
import routes from './routes/routes';
import UserService from './services/user.service';
import TokenService from './services/token.service';
import { userGoogleLogin } from './stores/actions/authAction';
import Cookies from 'js-cookie';

function App() {
  const theme = createTheme(getDesignTokens());
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { token, refreshToken } = TokenService.getAccessTokenFromURL(window.location.search);

  const dispatch = useDispatch();

  const getUser = async () => {
    const user = await UserService.getUserById(TokenService.decodeToken(token).sub);
    console.log('User:', user);
    return user;
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (token && refreshToken) {
        if (TokenService.isTokenExpired(refreshToken)) {
          console.log('Refresh token expired');
          return;
        }

        Cookies.set('accessToken', token, { expires: 7, secure: true, sameSite: 'Strict' });
        Cookies.set('refreshToken', refreshToken, { expires: 7, secure: true, sameSite: 'Strict' });
        const user = await getUser();
        Cookies.set('user', JSON.stringify(user), { expires: 7 });
        dispatch(
          userGoogleLogin({
            userData: user,
            userToken: token,
          }),
        );
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    fetchUser();
  }, [token, refreshToken, dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <Box display={'flex'}>
          {isAuthenticated && <Sidebar />}
          <Box flex={1}>
            {!isAuthenticated && <Header />}
            <Routes>
              {routes.map(({ path, element: Element, authRequired }) => (
                <Route
                  exact
                  key={path}
                  path={path}
                  element={authRequired ? <PrivateRoute element={<Element />} /> : <Element />}
                />
              ))}
            </Routes>
            {!isAuthenticated && <Footer />}
          </Box>
        </Box>
        <ToastContainer position="bottom-left" autoClose={5000} newestOnTop rtl={false} pauseOnFocusLoss pauseOnHover />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
