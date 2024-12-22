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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
