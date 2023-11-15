import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from 'react-router-dom';


import './App.css'
import RegisterPage from './app/pages/registerPage/RegisterPage';
import LoginPage from './app/pages/loginPage/LoginPage';
import AuthLayout from './app/layouts/authLayout/authLayout';
import NotFoundPage from './app/pages/notFoundPage/NotFoundPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<AuthLayout />} />
       
        <Route
          path="register"
          element={<RegisterPage />}
          handle={{ crumb: () => <Link to="/category">Категории</Link> }}
        />
        <Route
          path="login"
          element={<LoginPage />}
          handle={{ crumb: () => <Link to="/collections">Подборки</Link> }}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;