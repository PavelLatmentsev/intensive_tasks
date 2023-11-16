import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import AuthLayout from './app/layouts/authLayout/authLayout';
import NotFoundPage from './app/pages/notFoundPage/NotFoundPage';
import './App.css'
import AccounPage from './app/pages/accountPage/accountPage';
import GoogleSignPage from './app/pages/googleSignPage/GoogleSignPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/:type?">
        <Route index element={<AuthLayout />} />
       
        <Route
          path="personal"
          element={<AccounPage />}
        />
        <Route
          path="googlesign"
          element={<GoogleSignPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;