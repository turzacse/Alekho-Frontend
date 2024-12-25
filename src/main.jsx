import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Layout/Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import Reviews from './Pages/Reviews/Reviews.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';
import Contact from './Pages/ContactUs/Contact.jsx';
import About from './Pages/About/About.jsx';
import Pricing from './Pages/Pricing/Pricing.jsx';
import DashboardLayout from './Layout/Dashboard/DashboardLayout.jsx';
import Album from './Pages/Album/Album.jsx';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/reviews',
        element: <Reviews/>
      },
      {
        path: '/gallery',
        element: <Gallery/>
      },
      {
        path: '/contact-us',
        element: <Contact/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/pricing',
        element: <Pricing/>
      }
    ]
  },
  {
    path: '/admin',
    element: <DashboardLayout/>,
    children: [
      {
        path: '/admin/albums',
        element: <Album/>
      },
      {
        path: '/admin/photo-gallery',
        element: <PhotoGallery/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
