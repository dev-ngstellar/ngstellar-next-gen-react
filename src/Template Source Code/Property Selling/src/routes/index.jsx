import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Properties } from '../pages/Properties/Properties';
import { PropertyDetails } from '../pages/PropertyDetails/PropertyDetails';
import { Agents } from '../pages/Agents/Agents';
import { Projects } from '../pages/Projects/Projects';
import { Blog } from '../pages/Blog/Blog';
import { Contact } from '../pages/Contact/Contact';
import { NotFound } from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'properties',
        element: <Properties />
      },
      {
        path: 'property/:id',
        element: <PropertyDetails />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'agents',
        element: <Agents />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
