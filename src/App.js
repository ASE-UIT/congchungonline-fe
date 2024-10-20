import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getDesignTokens from './config/theme/themePrimitives';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './routes/PrivateRoute';
import UserService from './services/user.service';
import TokenService from './services/token.service';
import { userGoogleLogin } from './stores/actions/authAction';
import AuthService from './services/auth.service';
import Cookies from 'js-cookie';

const Home = lazy(() => import('./pages/home/Home'));
const Services = lazy(() => import('./pages/services/Services'));
const SignIn = lazy(() => import('./pages/signin/SignIn'));
const SignUp = lazy(() => import('./pages/signup/SignUp'));
const UserProfile = lazy(() => import('./pages/profile/UserProfile'));
const CreateNotarizationProfile = lazy(() => import('./pages/services/CreateNotarizationProfile'));
const LookupNotarizationProfile = lazy(() => import('./pages/services/LookupNotarizationProfile'));
const HistoryNotarizationProfile = lazy(() => import('./pages/services/HistoryNotarizationProfile'));
const CreateNotarizationSession = lazy(() => import('./pages/services/CreateNotarizationSession'));
const UserGuide = lazy(() => import('./pages/static/UserGuide'));
const NotFound = lazy(() => import('./pages/notfound/NotFound'));

function App() {
  const dispatch = useDispatch();
  const theme = createTheme(getDesignTokens());
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { token, refreshToken } = TokenService.getAccessTokenFromURL(window.location.search);

  useEffect(() => {
    const fetchUser = async () => {
      if (token && refreshToken) {
        try {
          const user = await UserService.getUserById(TokenService.decodeToken(token).sub);
          localStorage.setItem('userInfo', JSON.stringify(user));
          dispatch(
            userGoogleLogin({
              userData: user,
              userToken: token,
            }),
          );
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
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
              {/* Define routes directly here */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<PrivateRoute element={<UserProfile />} />} />
              <Route path="/notarization" element={<PrivateRoute element={<CreateNotarizationProfile />} />} />
              <Route path="/lookup" element={<LookupNotarizationProfile />} />
              <Route path="/history" element={<PrivateRoute element={<HistoryNotarizationProfile />} />} />
              <Route
                path="/create-notarization-session"
                element={<PrivateRoute element={<CreateNotarizationSession />} />}
              />
              <Route path="/user-guide" element={<UserGuide />} />
              <Route path="*" element={<NotFound />} />
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
