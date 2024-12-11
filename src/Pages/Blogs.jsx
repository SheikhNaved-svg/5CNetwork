import React,{Suspense} from 'react'
const BlogHero = React.lazy(() => import("../Components/BlogHero"));
const BlogLargecard = React.lazy(() => import("../Components/BlogLargecard"));
const HorizontalLine = React.lazy(() => import("../Components/HorizontalLine"));
const Blogsmcard = React.lazy(() => import("../Components/Blogsmcard"));
const BlogPagination = React.lazy(() => import("../Components/BlogPagination"));
import { useEffect } from "react";
export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
return (
    <div className="font-custom scroll-smooth">
      <Suspense fallback={<div>Loading...</div>}>
      {/*hero*/}
      <BlogHero />
      {/*large card*/}
      <BlogLargecard />
      {/*horizontal line*/}
      <HorizontalLine />
      {/*small cards*/}
      <Blogsmcard />
      {/*pagination*/}
      <BlogPagination />
      </Suspense>
    </div>
  );
}
