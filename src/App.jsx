import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Academics from "./Pages/Academics";
import Blogs from "./Pages/Blogs";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import Signin from "./Pages/Signin";
import './App.css'
import InnerBlog from "./Pages/InnerBlog";
import InnerServices from "./Pages/innerServices";

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
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
   <RouterProvider router={router} />
   
   </>
  )
}

export default App
