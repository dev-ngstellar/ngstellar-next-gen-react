import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import Trainers from '../pages/Trainers';
import Membership from '../pages/Membership';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'programs', element: <Programs /> },
      { path: 'trainers', element: <Trainers /> },
      { path: 'membership', element: <Membership /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
