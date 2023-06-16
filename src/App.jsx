import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContextProvider from './contexts/auth/AuthContextProvider';
import PrivateRoute from './router/PrivateRoute';
import Home from './screens/Home/Home';
import SignUp from './screens/signup/SignUp';
import Login from './screens/login/Login';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div >
  );
}

export default App;
