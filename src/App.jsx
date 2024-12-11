import React ,{ Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Home = React.lazy(()=>import("./Pages/Home"));
const About = React.lazy(()=>import("./Pages/About"));
const Careers = React.lazy(()=>import("./Pages/Careers"));
const Academics = React.lazy(()=>import("./Pages/Academics"));
const Blogs = React.lazy(()=>import("./Pages/Blogs"));
const Services = React.lazy(()=>import("./Pages/Services"));
const Signin = React.lazy(()=>import("./Pages/Signin"));
const InnerBlog = React.lazy(()=>import("./Pages/InnerBlog"));
const InnerServices = React.lazy(()=>import("./Pages/innerServices"));

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<div>
       <Navbar />
       <Home />
       <Footer />
      </div>
    },
    {
      path:'/about',
      element:<div>
        <Navbar />
       <About />
    <Footer />
      </div>
    },
    {
      path:'/blogs',
      element:<div>
        <Navbar />
        <Blogs />
        <Footer />
      </div>
    },
    {
      path:'/careers',
      element:<div>
        <Navbar />
       <Careers />
        <Footer />
      </div>
    },
    {
      path:'/academics',
      element:<div>
        <Navbar />
       <Academics />
        <Footer />
      </div>
    },
    {
      path:'/services',
      element:<div>
        <Navbar />
        <Services />
        <Footer />
      </div>
    },
    {
      path:'/innerservices',
      element:<div>
        <Navbar />
        <InnerServices />
        <Footer />
      </div>
    },
    {
      path:'/signin',
      element:<div>
        <Navbar />
        <Signin />
        <Footer />
      </div>
    },
    {
      path:'/innerblog/:id',
      element:<div>
        <Navbar />
       <InnerBlog />
        <Footer />
      </div>
    }
    

  ]
)
function App() {
  

  return (
   <>
   <Suspense fallback={<div>loader...</div>}>
   <RouterProvider router={router} />
   </Suspense>
   
   </>
  )
}

export default App
