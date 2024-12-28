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
import Album from './AdminPages/Album/Album.jsx';
import PhotoGallery from './AdminPages/PhotoGallery/PhotoGallery.jsx';
import Blog from './AdminPages/Blog/Blog.jsx';
import NewsFeed from './Pages/NewsFeed/NewsFeed.jsx';

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
      },
      {
        path: '/news-feed',
        element: <NewsFeed/>
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
      },
      {
        path: '/admin/blog',
        element: <Blog/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
