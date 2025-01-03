import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Main from '../Layout/Main/Main.jsx';
  import Home from '../Pages/Home/Home.jsx';
  import Reviews from '../Pages/Reviews/Reviews.jsx';
  import Gallery from '../Pages/Gallery/Gallery.jsx';
  import Contact from '../Pages/ContactUs/Contact.jsx';
  import About from '../Pages/About/About.jsx';
  import Pricing from '../Pages/Pricing/Pricing.jsx';
  import DashboardLayout from '../Layout/Dashboard/DashboardLayout.jsx';
  import Album from '../AdminPages/Album/Album.jsx';
  import PhotoGallery from '../AdminPages/PhotoGallery/PhotoGallery.jsx';
  
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

  
  export default router;
  